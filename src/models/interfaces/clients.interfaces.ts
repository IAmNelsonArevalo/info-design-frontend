/** Interfaces & Types */
import type {Request} from './models.interfaces';

export interface ClientsDates {
    fechainicio: string;
    fechafinal: string;
}

export interface GetClientsRequest extends Request {
    dates: ClientsDates;
}