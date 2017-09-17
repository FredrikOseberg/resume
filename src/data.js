import image from './img/fredrik.png';
import norwegianFlag from './img/norway.jpg';
import englishFlag from './img/unitedkingdom.jpg';
import jsImage from './img/jslogo.png';
import htmlImage from './img/html5.png';
import cssImage from './img/css3.png';
import lillehammer from './img/lillehammer.jpg';
import freecodecamp from './img/freecodecamp.jpg';
import toppen from './img/toppen.jpg';
import avidyx from './img/avidyxlogo.jpg';
import prolific from './img/prolific.JPG';
import humanResources from './img/hr2.jpeg';
import bartender from './img/bartender.jpeg';

const data = {
	user: {
		name: 'Fredrik',
		middleName: 'Strand',
		lastName: 'Oseberg',
		fullName: 'Fredrik Strand Oseberg',
		birthDate: '05/10/1988',
		phoneNumber: '+47 92816727',
		email: 'fredrik.no@gmail.com',
		socialMedia: {
			github: {
				url: 'https://github.com/FredrikOseberg'
			},
			linkedin: {
				url: 'https://www.linkedin.com/in/fredrik-strand-oseberg-71425ba2'
			}
		},
		image: image
	},
	lang: [
		{
			name: 'Norwegian',
			level: ' Native',
			img: norwegianFlag,
			id: 1
		},
		{
			name: 'English',
			level: 'Fluent',
			img: englishFlag,
			id: 2
		}
	],
	programmingLanguages: [
		{
			name: 'HTML5',
			description:
				'Very knowledgeable of HTML. Well versed in constructing sensible documents and markup for web pages.',
			img: htmlImage,
			id: 2,
			skills: [
				{
					name: 'Core Language',
					rating: 85,
					description: '',
					id: 1
				},
				{
					name: 'Markup Construction',
					rating: 90,
					description: '',
					id: 2
				},
				{
					name: 'Tag Knowledge',
					rating: 80,
					description: '',
					id: 3
				},
				{
					name: 'Form Construction',
					rating: 90,
					description: '',
					id: 4
				}
			]
		},
		{
			name: 'CSS3',
			description:
				'Very knowledgable in CSS. Used to building web pages with CSS/SASS and Bootstrap. Recently been using a lot of flexbox to build UIs. In fact this one is built completely on flexbox. ',
			img: cssImage,
			id: 3,
			skills: [
				{
					name: 'Core Language',
					rating: 80,
					description: '',
					id: 1
				},
				{
					name: 'Flexbox',
					rating: 60,
					description: '',
					id: 2
				},
				{
					name: 'Box Model',
					rating: 90,
					description: '',
					id: 3
				},
				{
					name: 'Fonts and Text',
					rating: 90,
					description: '',
					id: 4
				},
				{
					name: 'Boostrap',
					rating: 90,
					description: '',
					id: 5
				},
				{
					name: 'SASS',
					rating: 80,
					description: '',
					id: 6
				},
				{
					name: 'Animations',
					rating: 40,
					description: '',
					id: 7
				}
			]
		},
		{
			name: 'Javascript',
			description:
				'Ready for entry level frontend developer jobs. Good analytical skills. Good knowledge of core language. In the process of gaining knowledge of React, redux and webpack.',
			img: jsImage,
			id: 1,
			skills: [
				{
					name: 'Core Language',
					rating: 70,
					description: 'Knowledgable',
					id: 1
				},
				{
					name: 'ES6',
					rating: 60,
					description: 'Knowledgable',
					id: 2
				},
				{
					name: 'Webpack',
					rating: 20,
					description: 'Limited Knowledge',
					id: 3
				},
				{
					name: 'React',
					rating: 50,
					description: 'Somewhat Knowledgable',
					id: 4
				},
				{
					name: 'Redux',
					rating: 10,
					description: 'Limited Knowledge',
					id: 5
				},
				{
					name: 'NodeJS',
					rating: 0,
					description: 'No current knowledge',
					id: 6
				}
			]
		}
	],
	education: [
		{
			name: 'Bachelor in Psychology',
			institution: 'Lillehammer University College',
			startYear: 2013,
			endYear: 2016,
			img: lillehammer,
			id: 1
		},
		{
			name: 'Bachelor in Business Administration',
			institution: 'Lillehammer University College',
			startYear: 2010,
			endYear: 2013,
			img: lillehammer,
			id: 2
		}
	],
	certifications: [
		{
			issuer: 'FreeCodeCamp',
			date: '22 August, 2017',
			img: freecodecamp,
			name: 'Frontend Developer',
			link: 'https://www.freecodecamp.org/fredrikoseberg/front-end-certification',
			projects: [
				{
					name: 'Tribute Page',
					github: '',
					codepen: 'https://codepen.io/khare/pen/oWWwav',
					id: 1
				},
				{
					name: 'Portfolio Page',
					github: '',
					codepen: 'https://codepen.io/khare/pen/mmwrWR',
					id: 2
				},
				{
					name: 'Wikipedia Viewer',
					github: 'https://github.com/FredrikOseberg/wikipedia-viewer',
					codepen: 'https://codepen.io/khare/pen/yXzzxg',
					id: 3
				},
				{
					name: 'Quotemachine',
					github: '',
					codepen: 'https://codepen.io/khare/pen/vmpKvj',
					id: 4
				},
				{
					name: 'Twitch JSON Api',
					github: 'https://github.com/FredrikOseberg/twitch-json-api',
					codepen: 'https://codepen.io/khare/pen/YQvXdq',
					id: 5
				},
				{
					name: 'Weather App',
					github: 'https://github.com/FredrikOseberg/weather-app',
					codepen: 'https://codepen.io/khare/pen/vmaVqV',
					id: 6
				},
				{
					name: 'Calculator',
					github: 'https://github.com/FredrikOseberg/calculator',
					codepen: 'https://codepen.io/khare/pen/NvNwze',
					id: 7
				},
				{
					name: 'Tic Tac Toe',
					github: 'https://github.com/FredrikOseberg/tictactoe',
					codepen: 'https://codepen.io/khare/pen/LjQMVp',
					id: 8
				},
				{
					name: 'Pomodoro Clock',
					github: 'https://github.com/FredrikOseberg/pomodoro',
					codepen: 'https://codepen.io/khare/pen/dzdwGX',
					id: 9
				},
				{
					name: 'Simon Game',
					github: 'https://github.com/FredrikOseberg/simon',
					codepen: 'https://codepen.io/khare/pen/ZJoBpY',
					id: 10
				},
				{
					name: 'Basic Algorithmic Scripting',
					github: 'https://github.com/FredrikOseberg/fcc-scripting-challenges',
					codepen: '',
					id: 11
				},
				{
					name: 'Intermediate Algorithmic Scripting',
					github: 'https://github.com/FredrikOseberg/fcc-scripting-challenges',
					codepen: '',
					id: 12
				}
			],
			id: 1
		}
	],
	projects: [
		{
			name: 'Adrenaline Advisor',
			description: `Startup focused on making adventure tourism operators more visible on the web. Features
			a map where you could find adventure tourism sports all over Norway.`,
			img: 'imageSrc',
			url: null,
			status: 'Not Live'
		},
		{
			name: 'Websmith',
			description: 'My own personal portfolio page. Built with HTML, JavaScript and CSS.',
			img: 'imgSrc',
			url: 'http://www.websmith.com',
			status: 'Live'
		}
	],
	workExperience: [
		{
			title: 'Founder / CTO at Avidyx',
			img: avidyx,
			description:
				'Founder and CTO of Avidyx. A company that aimed to create a platform for adventure tourism operators.',
			workTasks: [
				{
					name: 'Product Development',
					id: 1
				},
				{
					name: 'Managing developers abroad.',
					id: 2
				},
				{ name: 'Programming', id: 3 },
				{ name: 'MVP Development', id: 4 },
				{ name: 'Product Testing', id: 5 },
				{ name: 'Event Planning and Execution', id: 6 }
			],
			startDate: 'March 2014',
			endDate: 'August 2017',
			all: true,
			highlight: true,
			management: true,
			coding: true,
			id: 1
		},
		{
			title: 'Manager at Toppen Bar',
			img: toppen,
			description:
				'Bar Manager of Toppen Bar. Toppen Bar is a high-class cocktail bar located in Lillehammer, Norway.',
			workTasks: [
				{ name: 'Strategy Development', id: 1 },
				{ name: 'Daily bar management', id: 2 },
				{ name: 'Hiring and training new employees', id: 3 },
				{ name: 'Managing information flow', id: 4 },
				{ name: 'Ordering wares', id: 5 },
				{ name: 'restocking the bar', id: 6 },
				{ name: 'Programming warehouse system', id: 7 }
			],
			startDate: 'August 2016',
			endDate: 'July 2017',
			all: true,
			highlight: true,
			management: true,
			coding: false,
			id: 2
		},
		{
			title: 'Bartender at Toppen Bar',
			img: toppen,
			description:
				'Bartender at Toppen Bar. Break for one year between 2014 and 2015 to focus on my own firm. Started again in June 2015.',
			workTasks: [
				{ name: 'Mixing drinks', id: 1 },
				{ name: 'Serving Customers', id: 2 },
				{ name: 'Making sure Norwegian drinking laws are followed', id: 3 }
			],
			startDate: 'August 2012',
			endDate: 'August 2016',
			all: true,
			highlight: false,
			management: false,
			coding: false,
			id: 3
		},
		{
			title: 'Crew on Expedition to Jan Mayen',
			img: prolific,
			description:
				'Worked as crew on sailboat to Jan Mayen. Transporting scientist to Jan Mayen in order to research whales.',
			workTasks: [
				{ name: 'Maintaining Ship', id: 1 },
				{ name: 'Simple Navigation', id: 2 },
				{ name: 'Sail Reefing', id: 3 },
				{ name: 'Repairing equipment', id: 4 }
			],
			startDate: 'June 2015',
			endDate: 'June 2015',
			all: true,
			highlight: true,
			management: false,
			coding: false,
			id: 4
		},
		{
			title: 'HR Consultant FMC Technologies',
			img: humanResources,
			description:
				'Wrote my bachelors thesis for FMC Technologies in 2013 on Training and Development of new employees. Continued working on a pilot project the ensuing summer.',
			workTasks: [
				{ name: 'Analysis of Training and Development practices', id: 1 },
				{ name: 'Development of new initiatives to measure performance', id: 2 },
				{ name: 'Interviewing team members', id: 3 },
				{ name: 'Execution of new initiatives', id: 4 }
			],
			startDate: 'December 2012',
			endDate: 'Summer 2013',
			all: true,
			highlight: false,
			management: true,
			coding: false,
			id: 5
		},
		{
			title: 'Bartender at Nikkers',
			img: bartender,
			description: 'Worked as a bartender and waiter at Nikkers restaurant and bar in Lillehammer.',
			workTasks: [
				{ name: 'Mixing drinks', id: 1 },
				{ name: 'Serving Customers', id: 2 },
				{ name: 'Making sure Norwegian drinking laws are followed', id: 3 }
			],
			startDate: 'Oktober 2010',
			endDate: 'August 2012',
			all: true,
			highlight: false,
			management: false,
			coding: false,
			id: 6
		}
	]
};

export default data;
