import React, { useState, useCallback, useRef } from 'react';
import { Card, Stack, Text, Button, Flex, Spinner, Box } from '@sanity/ui';
import { set, unset, useClient } from 'sanity';
import imageCompression from 'browser-image-compression';
import { UploadIcon, TrashIcon, ImageIcon } from '@sanity/icons';

export const CompressedImageInput = (props) => {
  const { onChange, value, schemaType, renderDefault } = props;
  
  // Initialize Sanity Client for uploading
  const client = useClient({ apiVersion: '2024-05-01' });
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef(null);

  const processFile = async (file) => {
    if (!file || !file.type.startsWith('image/')) return;

    setIsProcessing(true);
    setMessage('Compressing image to WebP...');

    try {
      const options = {
        maxSizeMB: 0.5,
        maxWidthOrHeight: 1200,
        useWebWorker: true,
        fileType: 'image/webp',
        initialQuality: 0.8,
      };

      const compressedFile = await imageCompression(file, options);
      
      setMessage('Uploading to Sanity...');

      const assetDocument = await client.assets.upload('image', compressedFile, {
        filename: compressedFile.name,
      });

      onChange(set({
        _type: schemaType.name || 'image',
        asset: {
          _type: 'reference',
          _ref: assetDocument._id,
        },
      }));
      
    } catch (error) {
      console.error('Optimization failed:', error);
      alert('Failed to optimize and upload image.');
    } finally {
      setIsProcessing(false);
      setMessage('');
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleFileChange = useCallback((event) => {
    processFile(event.target.files?.[0]);
  }, [client, onChange, schemaType.name]);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    processFile(e.dataTransfer.files?.[0]);
  }, [client, onChange, schemaType.name]);


  const handleRemove = useCallback(() => {
    onChange(unset());
  }, [onChange]);

  // If an image is already uploaded, render Sanity's default UI 
  if (value?.asset?._ref && !isProcessing) {
    return (
      <Card padding={3} radius={2} shadow={1} border>
        <Stack space={3}>
          {renderDefault(props)}
          <Button 
            icon={TrashIcon} 
            mode="ghost" 
            tone="critical" 
            text="Remove Image to Upload New" 
            onClick={handleRemove} 
            style={{ width: '100%' }}
          />
        </Stack>
      </Card>
    );
  }

  // Render our Custom Dropzone/Upload UI
  return (
    <Card 
      padding={5} 
      radius={3} 
      border 
      tone={isDragging ? 'primary' : 'default'}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={!isProcessing ? () => fileInputRef.current?.click() : undefined}
      style={{ 
        borderStyle: 'dashed', 
        borderWidth: '2px',
        borderColor: isDragging ? 'var(--card-focus-ring-color)' : 'var(--card-border-color)',
        transition: 'all 0.2s ease-in-out',
        cursor: isProcessing ? 'default' : 'pointer',
        opacity: isProcessing ? 0.8 : 1,
      }}
    >
      <Flex align="center" justify="center" direction="column" gap={4} style={{ textAlign: 'center' }}>
        {isProcessing ? (
          <Flex align="center" justify="center" direction="column" gap={4} padding={4}>
            <Spinner muted />
            <Text weight="medium" size={2} muted>{message}</Text>
          </Flex>
        ) : (
          <Flex align="center" justify="center" direction="column" gap={4}>
            <Box style={{ backgroundColor: 'var(--card-bg-color)', padding: '16px', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
              <Text size={4} muted>
                <ImageIcon />
              </Text>
            </Box>
            
            <Stack space={3}>
              <Text weight="semibold" size={2}>
                {isDragging ? 'Drop Image Here' : 'Click or Drag Image to Upload'}
              </Text>
              <Text size={1} muted>
                Images are automatically compressed to WebP (Max: 1200px, &lt;500KB)
              </Text>
            </Stack>
            
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              ref={fileInputRef}
              style={{ display: 'none' }}
            />
            
            <Button
              icon={UploadIcon}
              text="Browse Files"
              tone="primary"
              mode="ghost"
              onClick={(e) => {
                e.stopPropagation();
                fileInputRef.current?.click();
              }}
            />
          </Flex>
        )}
      </Flex>
    </Card>
  );
};
