import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, IsInt, Matches} from 'class-validator';
export class Reserva {

    @Expose({ name: 'id_reserva' })
    @IsInt({message: 'The parameter id_reserva must be a number'})
    @IsDefined({ message: 'The parameter id_reserva is required' })
    id_reserva: number;

    @Expose({ name: 'id_cliente' })
    @IsInt({message: 'The parameter id_cliente must be a number'})
    @IsDefined({ message: 'The parameter id_cliente is required' })
    id_cliente_id: number;

    @Expose({ name: 'id_automovil' })
    @IsInt({message: 'The parameter id_automovil must be a number'})
    @IsDefined({ message: 'The parameter id_automovil is required' })
    id_automovil_id: number;

    @Expose({ name: 'fecha_reserva' })
    @IsString({ message: 'The parameter fecha_reserva must be a date' })
    @IsDefined({ message: 'The parameter fecha_reserva is required' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fecha_reserva' })
    fecha_reserva: Date;

    @Expose({ name: 'fechaInicio' })
    @IsString({ message: 'The parameter fechaInicio must be a date' })
    @IsDefined({ message: 'The parameter fechaInicio is required' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaInicio' })
    fecha_inicio: Date;;

    @Expose({ name: 'fechaFin' })
    @IsString({ message: 'The parameter fechaFin must be a date' })
    @IsDefined({ message: 'The parameter fechaFin is required' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaFin' })
    fecha_fin: Date;

    @Expose({ name: 'estado' })
    @IsString({message: 'The parameter estado must be a string'})
    @IsDefined({ message: 'The parameter estado is required' })
    estado: string;

    constructor(data: Partial<Reserva>) {
        Object.assign(this, data);
        this.id_reserva = 0;
        this.id_cliente_id = 0;
        this.id_automovil_id = 0;
        this.fecha_reserva = new Date();
        this.fecha_inicio = new Date();
        this.fecha_fin = new Date();
        this.estado = "";
        
    }
};