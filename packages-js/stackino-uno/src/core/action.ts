import { TopBar, Bsod } from '../ui';

export function action<T, R>(thisArg: T, action: (this: T) => Promise<R>): () => void;
export function action<T, A1, R>(thisArg: T, action: (this: T, a1: A1) => Promise<R>): (a1: A1) => void;
export function action<T, A1, A2, R>(thisArg: T, action: (this: T, a1: A1, a2: A2) => Promise<R>): (a1: A1, a2: A2) => void;
export function action<T, A1, A2, A3, R>(thisArg: T, action: (this: T, a1: A1, a2: A2, a3: A3) => Promise<R>): (a1: A1, a2: A2, a3: A3) => void;
export function action<T, A1, A2, A3, A4, R>(thisArg: T, action: (this: T, a1: A1, a2: A2, a3: A3, a4: A4) => Promise<R>): (a1: A1, a2: A2, a3: A3, a4: A4) => void;
export function action<T, A1, A2, A3, A4, A5, R>(thisArg: T, action: (this: T, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => Promise<R>): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5) => void;
export function action<T, A1, A2, A3, A4, A5, A6, R>(thisArg: T, action: (this: T, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => Promise<R>): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6) => void;
export function action<T, A1, A2, A3, A4, A5, A6, A7, R>(thisArg: T, action: (this: T, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => Promise<R>): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7) => void;
export function action<T, A1, A2, A3, A4, A5, A6, A7, A8, R>(thisArg: T, action: (this: T, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => Promise<R>): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8) => void;
export function action<T, A1, A2, A3, A4, A5, A6, A7, A8, A9, R>(thisArg: T, action: (this: T, a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8, a9: A9) => Promise<R>): (a1: A1, a2: A2, a3: A3, a4: A4, a5: A5, a6: A6, a7: A7, a8: A8, a9: A9) => void;

// tslint:disable-next-line:ban-types
export function action(thisArg: any, fn: Function) {
	return (async function (this: any, ...args: any[]) {
		TopBar.show();
		try {
			await fn.apply(this, args);
		} catch (err) {
			Bsod.show('Unexpected error', err);
		} finally {
			TopBar.hide();
		}
	}).bind(thisArg);
}
