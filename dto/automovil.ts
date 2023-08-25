import {  IsDefined, IsString, Matches, IsInt } from 'class-validator';
import { Expose,Transform } from 'class-transformer';

export class Automovil {
    @Expose({ name: 'automovil' })
    @IsDefined({ message: 'The parameter car is required' })
    @IsInt({ message: 'The parameter car must be a number' })
    id_automovil: number;

    @Expose({ name: 'marca' })
    @IsDefined({ message: 'The parameter brand is required' })
    @IsString({ message: 'The parameter brand must be a string' })
    marca: string;

    @Expose({ name: 'modelo' })
    @IsDefined({ message: 'The parameter model is required' })
    @IsString({ message: 'The parameter model must be a string' })
    modelo: string;

    @Expose({ name: 'anio' })
    @IsDefined({ message: 'The parameter year is required' })
    @IsInt({ message: 'The parameter year must be a number' })
    anio: number;

    @Expose({ name: 'tipo' })
    @IsDefined({ message: 'The parameter tipe is required' })
    @IsString({ message: 'The parameter tipe must be a string' })
    tipo: string;

    @Expose({ name: 'capacidad' })
    @IsDefined({ message: 'The parameter capacidad is required' })
    @IsInt({ message: 'The parameter capacidad must be a number' })
    capacidad: number;

    @Expose({ name: 'precio' })
    @IsDefined({ message: 'The parameter precio is required' })
    @IsInt({ message: 'The parameter precio must be a number' })
    precio_diario: number;

    constructor(data: Partial<Automovil>) {
        Object.assign(this, data);
        this.id_automovil = 0;
        this.marca = '';
        this.modelo = '';
        this.anio = 0;
        this.tipo = '';
        this.capacidad = 0;
        this.precio_diario = 0;
    }
}
