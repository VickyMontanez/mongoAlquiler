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
export class Reserva {
    ;
    constructor(data) {
        Object.assign(this, data);
        this.id_reserva = 0;
        this.id_cliente_id = 0;
        this.id_automovil_id = 0;
        this.fecha_reserva = new Date();
        this.fecha_inicio = new Date();
        this.fecha_fin = new Date();
        this.estado = "";
    }
}
__decorate([
    Expose({ name: 'id_reserva' }),
    IsInt({ message: 'The parameter id_reserva must be a number' }),
    IsDefined({ message: 'The parameter id_reserva is required' }),
    __metadata("design:type", Number)
], Reserva.prototype, "id_reserva", void 0);
__decorate([
    Expose({ name: 'id_cliente' }),
    IsInt({ message: 'The parameter id_cliente must be a number' }),
    IsDefined({ message: 'The parameter id_cliente is required' }),
    __metadata("design:type", Number)
], Reserva.prototype, "id_cliente_id", void 0);
__decorate([
    Expose({ name: 'id_automovil' }),
    IsInt({ message: 'The parameter id_automovil must be a number' }),
    IsDefined({ message: 'The parameter id_automovil is required' }),
    __metadata("design:type", Number)
], Reserva.prototype, "id_automovil_id", void 0);
__decorate([
    Expose({ name: 'fecha_reserva' }),
    IsString({ message: 'The parameter fecha_reserva must be a date' }),
    IsDefined({ message: 'The parameter fecha_reserva is required' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fecha_reserva' }),
    __metadata("design:type", Date)
], Reserva.prototype, "fecha_reserva", void 0);
__decorate([
    Expose({ name: 'fechaInicio' }),
    IsString({ message: 'The parameter fechaInicio must be a date' }),
    IsDefined({ message: 'The parameter fechaInicio is required' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaInicio' }),
    __metadata("design:type", Date)
], Reserva.prototype, "fecha_inicio", void 0);
__decorate([
    Expose({ name: 'fechaFin' }),
    IsString({ message: 'The parameter fechaFin must be a date' }),
    IsDefined({ message: 'The parameter fechaFin is required' }),
    Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'Invalid format for fechaFin' }),
    __metadata("design:type", Date)
], Reserva.prototype, "fecha_fin", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsString({ message: 'The parameter estado must be a string' }),
    IsDefined({ message: 'The parameter estado is required' }),
    __metadata("design:type", String)
], Reserva.prototype, "estado", void 0);
;
