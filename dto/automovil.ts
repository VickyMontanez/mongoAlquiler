import {  IsDefined, IsString, Matches, IsInt } from 'class-validator';
import { Expose,Transform } from 'class-transformer';

export class Automovil {
    @Expose({ name: 'car' })
    @IsDefined({ message: 'El parametro car es obligatorio' })
    @IsInt({ message: 'El parametro car debe ser un número' })
    ID_Automovil: number;

    @Expose({ name: 'brand' }) 
    @IsDefined({ message: 'El parametro brand es obligatorio' })
    @IsString({ message: 'El parametro brand debe ser una cadena' })
    Marca: string;

    @Expose({ name: 'model' })
    @IsDefined({ message: 'El parametro model es obligatorio' })
    @IsString({ message: 'El parametro model debe ser una cadena' })
    Modelo: string;

    @Expose({ name: 'year' })
    @IsDefined({ message: 'El parametro year es obligatorio' })
    @IsInt({ message: 'El parametro year debe ser un número' })
    Anio: number;

    @Expose({ name: 'tipe' })
    @IsDefined({ message: 'El parametro tipe es obligatorio' })
    @IsString({ message: 'El parametro tipe debe ser una cadena' })
    Tipo: string;

    @Expose({ name: 'stalls' })
    @IsDefined({ message: 'El parametro stalls es obligatorio' })
    @IsInt({ message: 'El parametro stalls debe ser un número' })
    Capacidad: number;

    @Expose({ name: 'price' })
    @IsDefined({ message: 'El parametro price es obligatorio' })
    @IsInt({ message: 'El parametro price debe ser un número' })
    Precio_Diario: number;

    constructor(data: Partial<Automovil>) {
        Object.assign(this, data);
        this.ID_Automovil = 0;
        this.Marca = '';
        this.Modelo = '';
        this.Anio = 0;
        this.Tipo = '';
        this.Capacidad = 0;
        this.Precio_Diario = 0;
    }
}
