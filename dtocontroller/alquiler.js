var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined, IsString, Matches, IsInt } from 'class-validator';
export class Alquiler {
    constructor(data) {
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
__decorate([
    Expose({ name: 'alquiler' }),
    IsInt({ message: 'The parameter alquiler must be a number' }),
    IsDefined({ message: 'The parameter alquiler is required' }),
    __metadata("design:type", Number)
], Alquiler.prototype, "id_alquiler", void 0);
__decorate([
    Expose({ name: 'cliente' }),
    IsInt({ message: 'The parameter cliente must be a number' }),
    IsDefined({ message: 'The parameter cliente is required' }),
    __metadata("design:type", Number)
], Alquiler.prototype, "id_cliente_id", void 0);
__decorate([
    Expose({ name: 'automovil' }),
    IsInt({ message: 'The parameter automovil must be a number' }),
    IsDefined({ message: 'The parameter automovil is required' }),
    __metadata("design:type", Number)
], Alquiler.prototype, "id_automovil_id", void 0);
__decorate([
    Expose({ name: 'fechaInicio' }),
    IsString({ message: 'The parameter fechaInicio must be a date' }),
    IsDefined({ message: 'The parameter fechaInicio is required' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaInicio' }),
    __metadata("design:type", Date)
], Alquiler.prototype, "fecha_inicio", void 0);
__decorate([
    Expose({ name: 'fechaFin' }),
    IsString({ message: 'The parameter fechaFin must be a date' }),
    IsDefined({ message: 'The parameter fechaFin is required' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaFin' }),
    __metadata("design:type", Date)
], Alquiler.prototype, "fecha_fin", void 0);
__decorate([
    Expose({ name: 'costoTotal' }),
    IsInt({ message: 'The parameter costoTotal must be a number' }),
    IsDefined({ message: 'The parameter costoTotal is required' }),
    __metadata("design:type", Number)
], Alquiler.prototype, "costo_total", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsString({ message: 'The parameter estado must be a string' }),
    IsDefined({ message: 'The parameter estado is required' }),
    __metadata("design:type", String)
], Alquiler.prototype, "estado", void 0);
