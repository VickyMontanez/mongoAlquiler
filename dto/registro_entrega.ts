import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, IsInt, Matches } from 'class-validator';
export class Entrega{

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

    @Expose({ name: 'fechaEntrega' })
    @IsString({ message: 'The parameter fechaEntrega must be a date' })
    @IsDefined({ message: 'The parameter fechaEntrega is required' })
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaEntrega' })
    fecha_entrega: Date;

    @Expose({ name: 'combustible_entregado' })
    @IsInt({message: 'The parameter combustible_entregado must be a number'})
    @IsDefined({ message: 'The parameter combustible_entregado is required' })
    combustible_entregado: number;

    @Expose({ name: 'kilometraje_entregado' })
    @IsInt({message: 'The parameter kilometraje_entregado must be a number'})
    @IsDefined({ message: 'The parameter kilometraje_entregado is required' })
    kilometraje_entregado: number;

    constructor(data: Partial<Entrega>) {
        Object.assign(this, data);
        this.id_registro = 0;
        this.id_alquiler_id = 0;
        this.id_empleado_id = 0;
        this.fecha_entrega = new Date() ;
        this.combustible_entregado = 0;
        this.kilometraje_entregado = 0;
    }
};