import { CompressedImageInput } from '../components/CompressedImageInput'

export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required().error('A project title is required'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) => Rule.required().error('Please select a category'),
      options: {
        list: [
          { title: 'MS Fabrication', value: 'MS Fabrication' },
          { title: 'CNC Cutting', value: 'CNC Cutting' },
          { title: 'Main Gates', value: 'Main Gates' },
          { title: 'Safety Grills', value: 'Safety Grills' },
          { title: 'SS Railings', value: 'SS Railings' },
          { title: 'Custom Welding', value: 'Custom Welding' },
        ],
        layout: 'dropdown',
      },
    },
    {
      name: 'image',
      title: 'Project Image',
      type: 'image',
      validation: (Rule) => Rule.required().error('An image is required'),
      options: {
        hotspot: true,
      },
      components: {
        input: CompressedImageInput,
      }
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
};
