import { faPalette, faTheaterMasks, faLandmark, faBrain, faAtom, faFootball, faEarthAmericas, faDog} from '@fortawesome/free-solid-svg-icons';
//* Group all entertainment together 
const CATEGORIES = {
    general_knowledge:{
        name:'General Knowledge',
        icon:faBrain,
        color: 'grey',
        id: 9
    },
    art: {
        name: 'Art',
        icon: faPalette,
        color: 'purple',
        id:25
    },
    entertainment: {
        name: 'Entertainment',
        icon: faTheaterMasks,
        color: 'orange',
        id: [10,11,12,13,14,15,16,29,31]
    },
    history: {
        name: 'History',
        icon: faLandmark,
        color: 'red',
        id:23
    },
    science:{
        name:'Science',
        icon: faAtom,
        color: 'green',
        id:17
    },
    sports:{
        name:'Sports',
        icon:faFootball,
        color: 'brown',
        id:21
    },
    geography:{
        name:'Geography',
        icon: faEarthAmericas,
        color: 'blue',
        id:22
    },
    animals:{
        name:'Animals',
        icon: faDog,
        color: 'pink',
        id:27
    }
};

export default CATEGORIES;