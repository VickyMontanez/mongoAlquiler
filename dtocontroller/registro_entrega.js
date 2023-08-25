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
import { IsDefined, IsString, IsInt, Matches } from 'class-validator';
export class Entrega {
    constructor(data) {
        Object.assign(this, data);
        this.id_registro = 0;
        this.id_alquiler_id = 0;
        this.id_empleado_id = 0;
        this.fecha_entrega = new Date();
        this.combustible_entregado = 0;
        this.kilometraje_entregado = 0;
    }
}
__decorate([
    Expose({ name: 'id_registro' }),
    IsInt({ message: 'The parameter id_registro must be a number' }),
    IsDefined({ message: 'The parameter id_registro is required' }),
    __metadata("design:type", Number)
], Entrega.prototype, "id_registro", void 0);
__decorate([
    Expose({ name: 'id_alquiler' }),
    IsInt({ message: 'The parameter id_alquiler must be a number' }),
    IsDefined({ message: 'The parameter id_alquiler is required' }),
    __metadata("design:type", Number)
], Entrega.prototype, "id_alquiler_id", void 0);
__decorate([
    Expose({ name: 'id_empleado' }),
    IsInt({ message: 'The parameter id_empleado must be a number' }),
    IsDefined({ message: 'The parameter id_empleado is required' }),
    __metadata("design:type", Number)
], Entrega.prototype, "id_empleado_id", void 0);
__decorate([
    Expose({ name: 'fechaEntrega' }),
    IsString({ message: 'The parameter fechaEntrega must be a date' }),
    IsDefined({ message: 'The parameter fechaEntrega is required' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaEntrega' }),
    __metadata("design:type", Date)
], Entrega.prototype, "fecha_entrega", void 0);
__decorate([
    Expose({ name: 'combustible_entregado' }),
    IsInt({ message: 'The parameter combustible_entregado must be a number' }),
    IsDefined({ message: 'The parameter combustible_entregado is required' }),
    __metadata("design:type", Number)
], Entrega.prototype, "combustible_entregado", void 0);
__decorate([
    Expose({ name: 'kilometraje_entregado' }),
    IsInt({ message: 'The parameter kilometraje_entregado must be a number' }),
    IsDefined({ message: 'The parameter kilometraje_entregado is required' }),
    __metadata("design:type", Number)
], Entrega.prototype, "kilometraje_entregado", void 0);
;
