import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, Matches} from 'class-validator';

export class Cliente {
    @Expose({ name: 'id_cliente' })
    @IsDefined({ message: 'The parameter id_cliente is required' })
    id_cliente: number;

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

    @Expose({ name: 'email' })
    @IsDefined({ message: 'The parameter email is required' })
    @IsString({ message: 'The parameter email must be a string' })
    @Matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/, { message: 'Invalid format for email' })
    email: string;

    constructor(data: Partial<Cliente>) {
        Object.assign(this, data);
        this.id_cliente = 0;
        this.nombre = '';
        this.apellido = '';
        this.dni = '';
        this.direccion = '';
        this.telefono = '';
        this.email = '';
    }
}
