import { Label } from "@radix-ui/react-label";


export const headerLinks = [
    {
        label: 'Home',
        route: '/'
    },

    {
        label: "Youtube",
        route: '/youtube-page'
    },

    {
        label: "Tests",
        route: '/test'
    },

    {
      label: 'News',
      route: '/news'
    },

    {
      label: 'More Info',
      route: '/more-info'
    },

    {
      label: 'Resources',
      route: '/resources'
    }
];

export const testLinks = [
  {
    label: 'Depression Test',
    route: '/depression-test'
  },

  {
    label: 'PostPartum Depression(New and Expecting Parents)',
    route: '/postpartum-test'
  },

  {
    label: 'Anxiety Test',
    route: '/anxiety-test'
  },

  {
    label: 'ADHD Test',
    route: '/adhd-test'
  },

  {
    label: 'Bipolar Test',
    route: '/bipolar-test'
  },

  {
    label: 'Psychosis Test',
    route: '/psychosis-test'
  },

  {
    label: 'PTSD Test',
    route: '/ptsd-test'
  },

  {
    label: 'Eating Disorder Test',
    route: '/eating-disorder-test'
  },

  {
    label: 'Addiction Test',
    route: '/addiction-test'
  },

  {
    label: 'Parent Test - Your Childs Mental Health',
    route: '/parent-test'
  },

  {
    label: 'Youth Mental Health Test',
    route: '/youth-mental-health'
  }
];

export const infoLink = [
  {
    label: 'ADHD',
    route: '/adhd-info'
  }
]

export const nextLink = [
    {
      label: 'Next',
      route: '/personal-info'
    }
]

// export const socials = [
//     {
//       name: 'twitter',
//       url: '/twitter.svg',
//     },
//     {
//       name: 'linkedin',
//       url: '/linkedin.svg',
//     },
//     {
//       name: 'instagram',
//       url: '/instagram.svg',
//     },
//     {
//       name: 'facebook',
//       url: '/facebook.svg',
//     },
//   ];

  export const FOOTER_LINKS = [
    {
      title: 'Services',
      links: [
        // 'Pyschotherapy',
        // 'Mental Councelling',
        // 'Support Group',
        {
          label: 'Youtube',
          route: '/youtube-page'
        }
      ],

    },
    {
      title: 'Useful Links',
      links: ['Pricing', 'Privacy Policy', 'Terms Of Use', 'Help'],
    },
  ];

  

  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'mindfulcare@gmail.com' },
    ],
  };

  export const socials = {
    title: 'Social',
    links: [
      '/assets/icons/facebook.svg',
      '/assets/icons/instagram.svg',
      '/assets/icons/twitter.svg'
    ]
  }