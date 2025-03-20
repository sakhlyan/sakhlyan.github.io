// Project data
const projects = {
    'dj-kamunts': {
        title: 'DJ Kamunts',
        year: '2018-Present',
        sortDate: 2023,
        category: 'Music',
        categoryClass: 'category-music',
        description: 'Kamunts blends dystopian electronic beats with post-punk energy, bringing dancefloor-driven chaos to clubs and festivals worldwide. Regular performances in Moscow\'s Mutabor, Paris\' Wanderlust, and live shows on Rinse France.',
        image: 'images/dj-kamunts.jpg',
        links: [
            { text: 'Resident Advisor', url: 'https://ra.co/dj/kamunts' },
            { text: 'SoundCloud', url: 'https://soundcloud.com/kamunts' },
            { text: 'Bandcamp', url: 'https://kamunts.bandcamp.com' }
        ]
    },
    'tamagotchi': {
        title: 'De-contextualization, revolution, art / User Experience',
        year: '2018',
        sortDate: 2018,
        category: 'Art Installation',
        categoryClass: 'category-art',
        description: `I was obsessed with that toy, and it's tied to my memories. 
            I discovered that Japanese kids were committing suicide when their Tamagotchi died, 
            and after that, the toy was updated with a reset button. There's even a graveyard for 
            Tamagotchis in Japan. It was weird and strange to me that a toy could "die," and that 
            you could truly get obsessed with caring for it. I think people don't just need to care 
            for someone—they also need care themselves. That's the idea behind this installation. 
            
            Technically, it's simple but fully functional. The buttons trigger phone numbers, 
            calling me instantly on three different phones—so I know exactly which one was pressed.`,
        image: 'images/tamagotchi-1.jpg',
        additionalImages: [
            'images/tamagotchi-2.jpg',
            'images/tamagotchi-3.jpg'
        ]
    },
    'sound-installation': {
        title: 'Sonic Boundaries',
        year: '2023',
        sortDate: 2023,
        category: 'Art Installation',
        categoryClass: 'category-art',
        description: `This interactive sound installation explores the relationship between physical space and acoustic perception. 
            Visitors move through a series of spatial arrangements where their movements trigger and modify ambient soundscapes.
            
            Using proximity sensors and pressure pads connected to a custom-built Max/MSP patch, the installation creates a unique 
            sonic experience for each participant based on their path and pace through the space.`,
        image: 'images/sonic-boundaries-1.jpg',
        additionalImages: [
            'images/sonic-boundaries-2.jpg',
            'images/sonic-boundaries-3.jpg'
        ],
        links: [
            { text: 'Documentation Video', url: 'https://vimeo.com/example' },
            { text: 'Exhibition Photos', url: 'https://flickr.com/example' }
        ]
    },
    'medialab': {
        title: '"A Clockwork Orange" Photogramm',
        year: '2017',
        sortDate: 2017,
        category: 'Art Installation',
        categoryClass: 'category-art',
        description: '',
        image: 'images/medialab.jpg',
        links: [
            { text: 'Medialab Presentation', url: 'http://focus.org.am/wp-content/uploads/2018/10/Medialab-presentation_English.pdf' }
        ]
    },
    // ... all other project data from the original file ...
}; 

// Add this line to verify changes are working
console.log("Projects data loaded successfully - version 1.0"); 