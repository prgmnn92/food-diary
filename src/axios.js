import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.nutritionix.com/v1_1'
});

export const params = {
	appId: '9a964acb',
	appKey: 'cc4609a2eaaa039fd8af0152883c4fe3'
};

export default instance;
