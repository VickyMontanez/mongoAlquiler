import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString } from 'class-validator';

export class Empleado {

    @Expose({ name: 'empleado' })
    @IsDefined({ message: () => { throw { status: 422, message: `El parametro empleado es obligatorio` } } })
    id_empleado: number;

    @Expose({ name: 'nombre' })
    @IsDefined({ message: 'The parameter nombre is required' })
    @IsString({ message: 'The parameter nombre must be a string' })
    nombre: string;

    @Expose({ name: 'apellido' })
    @IsDefined({ message: 'The parameter apellido is required' })
    @IsString({ message: 'The parameter apellido must be a string' })
    apellido: string;

    @Expose({ name: 'dni' })
    @IsDefined({ message: 'The parameter DNI is required' })
    @IsString({ message: 'The parameter DNI must be an object' })
    dni: string;

    @Expose({ name: 'direccion' })
    @IsDefined({ message: 'The parameter direccion is required' })
    @IsString({ message: 'The parameter direccion must be a string' })
    direccion: string;

    @Expose({ name: 'telefono' })
    @IsDefined({ message: 'The parameter telefono is required' })
    @IsString({ message: 'The parameter telefono must be a string' })
    telefono: string;

    @Expose({ name: 'cargo' })
    @IsDefined({message: `El parametro ocupation es obligatorio` })
    @IsString({ message: 'The parameter cargo must be a string' })
    cargo: string;

    constructor(data: Partial<Empleado>) {
        Object.assign(this, data);
        this.id_empleado = 0;
        this.nombre = "";
        this.apellido = "";
        this.dni = "";
        this.direccion = "";
        this.telefono = "";
        this.cargo = "";
        
    }
};