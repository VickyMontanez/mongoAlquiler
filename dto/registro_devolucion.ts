import { Expose, Transform } from 'class-transformer';
import { IsDefined, Matches, IsString, IsInt} from 'class-validator';
export class Devolucion {

    @Expose({ name: 'id_registro' })
    @IsInt({message: 'The parameter id_registro must be a number'})
    @IsDefined({ message: 'The parameter id_registro is required' })
    id_registro: number;

    @Expose({ name: 'id_alquiler' })
    @IsInt({message: 'The parameter id_alquiler must be a number'})
    @IsDefined({ message: 'The parameter id_alquiler is required' })
    id_alquiler_id: number;

    @Expose({ name: 'id_empleado' })
    @IsInt({message: 'The parameter id_empleado must be a number'})
    @IsDefined({ message: 'The parameter id_empleado is required' })
    id_empleado_id: number;

    @Expose({ name: 'fechaDevolucion' })
    @IsString({ message: 'The parameter fechaDevolucion must be a date' })
    @IsDefined({ message: 'The parameter fechaDevolucion is required' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaDevolucion' })
    fecha_devolucion: Date;

    @Expose({ name: 'combustible_devuelto' })
    @IsInt({message: 'The parameter combustible_devuelto must be a number'})
    @IsDefined({ message: 'The parameter combustible_devuelto is required' })
    combustible_devuelto: number;

    @Expose({ name: 'kilometraje_devuelto' })
    @IsInt({message: 'The parameter kilometraje_devuelto must be a number'})
    @IsDefined({ message: 'The parameter kilometraje_devuelto is required' })
    kilometraje_devuelto: number;

    @Expose({ name: 'monto_adicional' })
    @IsInt({message: 'The parameter monto_adicional must be a number'})
    @IsDefined({ message: 'The parameter monto_adicional is required' })
    monto_adicional: number;

    constructor(data: Partial<Devolucion>) {
        Object.assign(this, data);
        this.id_registro = 0;
        this.id_alquiler_id = 0;
        this.id_empleado_id = 0;
        this.fecha_devolucion = new Date();
        this.combustible_devuelto = 0;
        this.kilometraje_devuelto = 0;
        this.monto_adicional = 0;
    }
};