import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';

export class Alquiler {
    @Expose({ name: 'alquiler' })
    @IsInt({message: 'The parameter alquiler must be a number'})
    @IsDefined({ message: 'The parameter alquiler is required' })
    id_alquiler: number;

    @Expose({ name: 'cliente' })
    @IsInt({message: 'The parameter cliente must be a number'})
    @IsDefined({ message: 'The parameter cliente is required' })
    id_cliente_id: number;

    @Expose({ name: 'automovil' })
    @IsInt({message: 'The parameter automovil must be a number'})
    @IsDefined({ message: 'The parameter automovil is required' })
    id_automovil_id: number;

    @Expose({ name: 'fechaInicio' })
    @IsString({ message: 'The parameter fechaInicio must be a date' })
    @IsDefined({ message: 'The parameter fechaInicio is required' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaInicio' })
    fecha_inicio: Date;

    @Expose({ name: 'fechaFin' })
    @IsString({ message: 'The parameter fechaFin must be a date' })
    @IsDefined({ message: 'The parameter fechaFin is required' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaFin' })
    fecha_fin: Date;

    @Expose({ name: 'costoTotal' })
    @IsInt({message: 'The parameter costoTotal must be a number'})
    @IsDefined({ message: 'The parameter costoTotal is required' })
    costo_total: number;

    @Expose({ name: 'estado' })
    @IsString({message: 'The parameter estado must be a string'})
    @IsDefined({ message: 'The parameter estado is required' })
    estado: string;

    constructor(data: Partial<Alquiler>) {
        Object.assign(this, data);
        this.id_alquiler = 0;
        this.id_cliente_id = 0;
        this.id_automovil_id = 0;
        this.fecha_inicio = new Date();
        this.fecha_fin = new Date();
        this.costo_total = 0;
        this.estado = '';
    }
}