const project ={
    name:'project',
    title:'JobBlog',
    type: 'document',
    fields:[
        {
            name:'CompanyName',
            title:'Company Name',
            type :'string'
        },
        {
            name:'name',
            title:'Author Name',
            type :'string'
        },
        {
            title: 'Release Date',
            name: 'releaseDate',
            type: 'date'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            name:'slug',
            title:'slug',
            type:'slug',
            options:{source:'name'}
        },
        {
            title: 'Poster',
            name: 'poster',
            type: 'image',
            options: {
              hotspot: true 
            },
            fields: [
              
              {
                name: 'alt',
                type: 'string',
                title: 'Alt',
              }
            ]
          },
          
          {
            title: 'Content', 
            name: 'content',
            type: 'array', 
            of: [{type: 'block'}]
          }
    ]
}

export default project;