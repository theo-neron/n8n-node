import {
	IAuthenticateGeneric,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class CityWeatherApi implements ICredentialType {
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-name-uppercase-first-char
	name = 'CityWeatherApi';
	displayName = 'City Weather API';
	// Uses the link to this tutorial as an example
	// Replace with your own docs links when building your own nodes
	documentationUrl = 'https://docs.n8n.io/integrations/creating-nodes/build/declarative-style-node/';
	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			// eslint-disable-next-line n8n-nodes-base/cred-class-field-type-options-password-missing
			type: 'string',
			default: '',
		},
	];
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-authenticate-type-assertion
	authenticate = {
		type: 'generic',
		properties: {
			qs: {
				'appid': '={{$credentials.apiKey}}'
			}
		},
	} as IAuthenticateGeneric;
}
