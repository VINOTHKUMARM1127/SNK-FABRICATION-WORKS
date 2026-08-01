import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'SNK Fabrication Admin',

  projectId: 'nnh0dbn0',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Website Content')
          .items([
            S.listItem()
              .title('Projects')
              .child(
                S.documentList()
                  .title('All Projects')
                  .filter('_type == "project"')
                  .defaultOrdering([{ field: 'createdAt', direction: 'desc' }])
              ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
