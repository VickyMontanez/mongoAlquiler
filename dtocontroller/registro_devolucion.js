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
import { IsDefined, Matches, IsString, IsInt } from 'class-validator';
export class Devolucion {
    constructor(data) {
        Object.assign(this, data);
        this.id_registro = 0;
        this.id_alquiler_id = 0;
        this.id_empleado_id = 0;
        this.fecha_devolucion = new Date();
        this.combustible_devuelto = 0;
        this.kilometraje_devuelto = 0;
        this.monto_adicional = 0;
    }
}
__decorate([
    Expose({ name: 'id_registro' }),
    IsInt({ message: 'The parameter id_registro must be a number' }),
    IsDefined({ message: 'The parameter id_registro is required' }),
    __metadata("design:type", Number)
], Devolucion.prototype, "id_registro", void 0);
__decorate([
    Expose({ name: 'id_alquiler' }),
    IsInt({ message: 'The parameter id_alquiler must be a number' }),
    IsDefined({ message: 'The parameter id_alquiler is required' }),
    __metadata("design:type", Number)
], Devolucion.prototype, "id_alquiler_id", void 0);
__decorate([
    Expose({ name: 'id_empleado' }),
    IsInt({ message: 'The parameter id_empleado must be a number' }),
    IsDefined({ message: 'The parameter id_empleado is required' }),
    __metadata("design:type", Number)
], Devolucion.prototype, "id_empleado_id", void 0);
__decorate([
    Expose({ name: 'fechaDevolucion' }),
    IsString({ message: 'The parameter fechaDevolucion must be a date' }),
    IsDefined({ message: 'The parameter fechaDevolucion is required' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaDevolucion' }),
    __metadata("design:type", Date)
], Devolucion.prototype, "fecha_devolucion", void 0);
__decorate([
    Expose({ name: 'combustible_devuelto' }),
    IsInt({ message: 'The parameter combustible_devuelto must be a number' }),
    IsDefined({ message: 'The parameter combustible_devuelto is required' }),
    __metadata("design:type", Number)
], Devolucion.prototype, "combustible_devuelto", void 0);
__decorate([
    Expose({ name: 'kilometraje_devuelto' }),
    IsInt({ message: 'The parameter kilometraje_devuelto must be a number' }),
    IsDefined({ message: 'The parameter kilometraje_devuelto is required' }),
    __metadata("design:type", Number)
], Devolucion.prototype, "kilometraje_devuelto", void 0);
__decorate([
    Expose({ name: 'monto_adicional' }),
    IsInt({ message: 'The parameter monto_adicional must be a number' }),
    IsDefined({ message: 'The parameter monto_adicional is required' }),
    __metadata("design:type", Number)
], Devolucion.prototype, "monto_adicional", void 0);
;
