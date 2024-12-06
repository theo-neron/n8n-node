import { INodeType, INodeTypeDescription } from 'n8n-workflow';

export class CityWeather implements INodeType {
	description: INodeTypeDescription = {
		// Basic node details will go here
		displayName: 'City Weather',
		name: 'CityWeather',
		icon: 'file:cityweather.svg',
		group: ['transform'],
		version: 1,
		subtitle: 'Get City Weather',
		description: 'Get data from OpenWeatherMap API',
		defaults: {
			name: 'City Weather',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'CityWeatherApi',
				required: true,
			},
		],
		requestDefaults: {
			baseURL: 'https://api.openweathermap.org/data/2.5/weather',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
		},
		//Required fields
		properties: [
			{
				displayName: 'City',
				name: 'cityName',
				type: 'string',
				default: '',
				placeholder: 'City Name',
				required: true,
				description: 'The name of the city you want',
				routing: {
					request: {
						//method: 'GET',
						//url: '=?q={{$value}}',
						qs: {
							q: '={{$value}}',
						},
					},
				},
			},

			//Optional fields
			{
				displayName: 'Additional Fields',
				name: 'additionalFields',
				type: 'collection',
				default: {},
				placeholder: 'Add Field',
				options: [
					{
						displayName: 'Format',
						name: 'format',
						type: 'options',
						noDataExpression: true,
						options: [
							{
								name: 'Imperial',
								value: 'imperial',
								description: 'Fahrenheit | miles/hour',
							},
							{
								name: 'Metric',
								value: 'metric',
								description: 'Celsius | meters/second',
							},
							{
								name: 'Scientific',
								value: 'standard',
								description: 'Kelvin | meters/second',
							},
						],
						default: 'metric',
						description: 'The format for the data',
						routing: {
							request: {
								qs: {
									units: '={{$value}}',
								},
							},
						},
					},
					{
						displayName: 'Language',
						name: 'language',
						type: 'string',
						default: '',
						placeholder: 'en',
						description: 'The language for the data',
						routing: {
							request: {
								qs: {
									lang: '={{$value}}',
								},
							},
						},
					},
				],
			},
		],
	};
}
