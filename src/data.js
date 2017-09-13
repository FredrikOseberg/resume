import image from './img/fredrik.png';
import norwegianFlag from './img/norway.jpg';
import englishFlag from './img/unitedkingdom.jpg';
import jsImage from './img/jslogo.png';
import htmlImage from './img/html5.png';
import cssImage from './img/css3.png';

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
			name: 'Javascript',
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
					rating: 40,
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
		},
		{
			name: 'HTML5',
			img: htmlImage,
			id: 2,
			skills: [
				{
					name: 'Core Language',
					rating: 85,
					description: '',
					id: 1
				}
			]
		},
		{
			name: 'CSS3',
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
				}
			]
		}
	],
	education: [
		{
			name: 'Bachelor in Psychology',
			institution: 'Lillehammer University College',
			startYear: 2013,
			endYear: 2016
		},
		{
			name: 'Bachelor of Business Administration',
			institution: 'Lillehammer University College',
			startYear: 2010,
			endYear: 2013
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
			description: '',
			startDate: '',
			endDate: ''
		}
	]
};

export default data;
