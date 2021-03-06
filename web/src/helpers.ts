import { HttpErrorResponse } from '@angular/common/http';
import { flatten, isObject } from 'lodash-es';
import { environment } from './environments/environment';

declare var require: any;

const swal = require('sweetalert');

export class Asker {
	static async notice(message: string, title?: string) {
		return (await swal({
			title,
			text: message,
			buttons: ['Cancel', 'Confirm'],
			icon: 'info',
		}))
			? true
			: false;
	}
	static async danger(message: string, title?: string) {
		return (await swal({
			title,
			text: message,
			buttons: ['Cancel', 'Confirm'],
			dangerMode: true,
			icon: 'warning',
		}))
			? true
			: false;
	}

	static async save(message: string, title?: string) {
		return (await swal({
			title,
			text: message,
			buttons: ['Cancel', 'Save'],
			icon: 'info',
		}))
			? true
			: false;
	}

	static async okay(message: string, title?: string) {
		return (await swal({ title, text: message, icon: 'info' }))
			? true
			: false;
	}
}

export function url(path: string, params?: Record<string, string>) {
	return `${environment.serverUrl}${path}${
		params ? `?${new URLSearchParams(params).toString()}` : ''
	}`;
}

export function numberToWord(value: number) {
	switch (value) {
		case 1:
			return 'one';
		case 2:
			return 'two';
		case 3:
			return 'three';
		case 4:
			return 'four';
		case 5:
			return 'five';
		default:
			throw new Error('Invalid value');
	}
}

export function errorToStrings(error: Error) {
	if (error instanceof HttpErrorResponse) {
		const messages: string[] = [];

		if (error.status === 422 && isObject(error.error.errors)) {
			flatten(Object.values(error.error.errors)).forEach((error) =>
				messages.push(error as any)
			);
		} else if (error.error.message) {
			messages.push(error.error.message);
		}

		return messages.reverse();
	}

	return [error.message];
}
