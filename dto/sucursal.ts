import { Expose, Transform } from 'class-transformer';
import { IsDefined, IsString, IsInt} from 'class-validator';
export class Sucursal {

    @Expose({ name: ' id_sucursal' })
    @IsDefined({ message: 'The parameter id_sucursal is required' })
    @IsInt({message: 'The parameter id_sucursal must be a number'}) 
    id_sucursal: number;

    @Expose({ name: 'nombre' })
    @IsDefined({ message: 'The parameter nombre is required' })
    @IsString({ message: 'The parameter nombre must be a string' })
    nombre: string;

    @Expose({ name: 'direccion' })
    @IsDefined({ message: 'The parameter direccion is required' })
    @IsString({ message: 'The parameter direccion must be a string' })
    direccion: string;

    @Expose({ name: 'telefono' })
    @IsDefined({ message: 'The parameter telefono is required' })
    @IsString({ message: 'The parameter telefono must be a string' })
    telefono: string;

    constructor(data: Partial<Sucursal>) {
        Object.assign(this, data);
        this.id_sucursal = 0;
        this.nombre = "";
        this.direccion = "";
        this.telefono="";
    }

}