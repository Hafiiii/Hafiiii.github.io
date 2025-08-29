// education data
import unimas from '../../../assets/unimas.png';
import uitm from '../../../assets/uitm.png';
import kns from '../../../assets/kns.png';
// creation data
import WSAWIR from '../../../assets/waste-sorting-app-with-image-recognition.png';
import BPS from '../../../assets/budget-planner-system.jpg';
import CTBS from '../../../assets/cinema-ticket-booking-system.jpg';
import PW from '../../../assets/personal-website.jpg';

export const educationData = [
    {
        id: 1,
        src: unimas,
        alt: 'UNIMAS',
        university: 'University of Malaysia, Sarawak (UNIMAS)',
        course: 'Bachelor of Software Engineering',
        grade: 'CGPA : 3.57',
        start: 'Oct 2021',
        end: 'The Graduation: Nov 2025',
    },
    {
        id: 2,
        src: uitm,
        alt: 'UITM',
        university: 'Universiti Teknologi MARA (UiTM)',
        course: 'Foundation of Science',
        grade: 'CGPA : 3.33',
        start: 'Oct 2020',
        end: 'The Graduation: Oct 2021',
    },
    {
        id: 3,
        src: kns,
        alt: 'KNS',
        university: 'SMK Kampung Nangka, Sibu',
        course: 'Science Stream',
        grade: 'SPM : 2A 4A+ 3A-',
        start: 'Jan 2015',
        end: 'The Graduation: Dec 2019',
    },
];

export const creationCarouselData = [
    {
        id: 1,
        src: WSAWIR,
        alt: 'waste-sorting-app-with-image-recognition',
        title: 'Waste Sorting App with Image Recognition',
        githubURL: 'https://github.com/Hafiiii/Sortify',
    },
    {
        id: 2,
        src: BPS,
        alt: 'budget-planner-system',
        title: 'Budget Planner System',
        team: 'Team: Imran, Ferdinand, Ezzah',
        githubURL: 'https://github.com/Hafiiii/budget-planner-system',
    },
    {
        id: 3,
        src: CTBS,
        alt: 'cinema-ticket-booking-system',
        title: 'Cinema Ticket Booking System',
        team: 'Team: Aleya, Azizah, Nisa',
        githubURL: 'https://github.com/Hafiiii/cinema-ticket-booking-system',
    },
    {
        id: 4,
        src: PW,
        alt: 'hafiiii.github.io',
        title: 'Personal Website',
        githubURL: 'https://github.com/Hafiiii/hafiiii.github.io',
    },
];

export const creationGridData = [
    {
        id: 1,
        title: 'Waste Sorting App with Image Recognition',
        desc: 'A mobile app that allows users to take or upload photos of waste items, then uses Google Vision API to identify and classify them into the correct recycling or disposal category.',
        language: 'React Native, Firebase, Google Vision API',
        githubURL: 'https://github.com/Hafiiii/Sortfiy',
        tab: 'Mobile',
    },
    {
        id: 2,
        title: 'Budget Planner System',
        desc: 'A system to help university students with their budget by tracking their income and expenses.',
        team: 'Imran, Ferdinand, Ezzah',
        language: 'Java',
        githubURL: 'https://github.com/Hafiiii/budget-planner-system',
        tab: 'Java',
    },
    {
        id: 3,
        title: 'FoodShare',
        desc: 'A mobile app where users can list surplus food items and connect with nearby individuals or organizations in need.',
        team: 'Izzati, Ezzah',
        language: 'React Native, Firebase',
        githubURL: 'https://github.com/Hafiiii/FoodShare',
        tab: 'Mobile',
    },
    {
        id: 4,
        title: 'Cinema Ticket Booking System',
        desc: 'A system to manage ticket inventory and process transactions.',
        team: 'Aleya, Azizah, Nisa',
        language: 'JavaScript, HTML/CSS, PHP, MySQL',
        githubURL: 'https://github.com/Hafiiii/cinema-ticket-booking-system',
        tab: 'Web',
    },
    {
        id: 5,
        title: 'Personal Website',
        desc: 'Online representation of me! A website to showcase my background and academic journey.',
        language: 'React.js',
        githubURL: 'https://github.com/Hafiiii/hafiiii.github.io',
        tab: 'Web',
    },
];