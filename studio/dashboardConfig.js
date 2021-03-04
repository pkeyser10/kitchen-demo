export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60407836417d1c799e9ad99f',
                  title: 'Sanity Studio',
                  name: 'kitchen-demo-studio',
                  apiId: '5664209a-3406-4dca-8c85-0c758def8b7b'
                },
                {
                  buildHookId: '6040783643272d6f0b3097cc',
                  title: 'Blog Website',
                  name: 'kitchen-demo',
                  apiId: 'ff022c8c-8d94-4b71-b83f-705fae9325df'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pkeyser10/kitchen-demo',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kitchen-demo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
