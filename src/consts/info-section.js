import { getAge } from '../utils/get-age.js';

export const infoItems = [
	{
		name: 'Location',
		value: 'Moscow, Russia',
		iconLink: '/icons/location.svg'
	},
	{
		name: 'Age',
		value: getAge(new Date(1996, 7, 26)),
		iconLink: '/icons/age.svg'
	},
	{
		name: 'Nationality',
		value: 'Russian',
		iconLink: '/icons/nationality.svg'
	},
	{
		name: 'Interests',
		value: 'Programming, chess, traveling, games',
		iconLink: '/icons/interests.svg'
	},
	{
		name: 'Study',
		value: 'MSTU "STANKIN"',
		iconLink: '/icons/study.svg'
	},
	{
		name: 'Employment',
		value: 'T-Bank',
		iconLink: '/icons/employment.svg'
	}
];
