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
                  buildHookId: '5f717f5a161991559f8eb464',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-fu3ey5j7',
                  apiId: 'af7d1519-b819-45db-9874-705b7f0af871'
                },
                {
                  buildHookId: '5f717f5aa42cb54b0bb36155',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-hesy86u2',
                  apiId: '05ccb828-1f0a-4279-86ac-2e1814d4605c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/suniel009/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-hesy86u2.netlify.app', category: 'apps'}
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
