var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsDefined, IsString, IsInt } from 'class-validator';
import { Expose } from 'class-transformer';
export class Automovil {
    constructor(data) {
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
__decorate([
    Expose({ name: 'automovil' }),
    IsDefined({ message: 'The parameter car is required' }),
    IsInt({ message: 'The parameter car must be a number' }),
    __metadata("design:type", Number)
], Automovil.prototype, "id_automovil", void 0);
__decorate([
    Expose({ name: 'marca' }),
    IsDefined({ message: 'The parameter brand is required' }),
    IsString({ message: 'The parameter brand must be a string' }),
    __metadata("design:type", String)
], Automovil.prototype, "marca", void 0);
__decorate([
    Expose({ name: 'modelo' }),
    IsDefined({ message: 'The parameter model is required' }),
    IsString({ message: 'The parameter model must be a string' }),
    __metadata("design:type", String)
], Automovil.prototype, "modelo", void 0);
__decorate([
    Expose({ name: 'anio' }),
    IsDefined({ message: 'The parameter year is required' }),
    IsInt({ message: 'The parameter year must be a number' }),
    __metadata("design:type", Number)
], Automovil.prototype, "anio", void 0);
__decorate([
    Expose({ name: 'tipo' }),
    IsDefined({ message: 'The parameter tipe is required' }),
    IsString({ message: 'The parameter tipe must be a string' }),
    __metadata("design:type", String)
], Automovil.prototype, "tipo", void 0);
__decorate([
    Expose({ name: 'capacidad' }),
    IsDefined({ message: 'The parameter capacidad is required' }),
    IsInt({ message: 'The parameter capacidad must be a number' }),
    __metadata("design:type", Number)
], Automovil.prototype, "capacidad", void 0);
__decorate([
    Expose({ name: 'precio' }),
    IsDefined({ message: 'The parameter precio is required' }),
    IsInt({ message: 'The parameter precio must be a number' }),
    __metadata("design:type", Number)
], Automovil.prototype, "precio_diario", void 0);
