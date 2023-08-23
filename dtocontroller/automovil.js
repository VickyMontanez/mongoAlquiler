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
        this.ID_Automovil = 0;
        this.Marca = '';
        this.Modelo = '';
        this.Anio = 0;
        this.Tipo = '';
        this.Capacidad = 0;
        this.Precio_Diario = 0;
    }
}
__decorate([
    Expose({ name: 'car' }),
    IsDefined({ message: 'El parametro car es obligatorio' }),
    IsInt({ message: 'El parametro car debe ser un número' }),
    __metadata("design:type", Number)
], Automovil.prototype, "ID_Automovil", void 0);
__decorate([
    Expose({ name: 'brand' }),
    IsDefined({ message: 'El parametro brand es obligatorio' }),
    IsString({ message: 'El parametro brand debe ser una cadena' }),
    __metadata("design:type", String)
], Automovil.prototype, "Marca", void 0);
__decorate([
    Expose({ name: 'model' }),
    IsDefined({ message: 'El parametro model es obligatorio' }),
    IsString({ message: 'El parametro model debe ser una cadena' }),
    __metadata("design:type", String)
], Automovil.prototype, "Modelo", void 0);
__decorate([
    Expose({ name: 'year' }),
    IsDefined({ message: 'El parametro year es obligatorio' }),
    IsInt({ message: 'El parametro year debe ser un número' }),
    __metadata("design:type", Number)
], Automovil.prototype, "Anio", void 0);
__decorate([
    Expose({ name: 'tipe' }),
    IsDefined({ message: 'El parametro tipe es obligatorio' }),
    IsString({ message: 'El parametro tipe debe ser una cadena' }),
    __metadata("design:type", String)
], Automovil.prototype, "Tipo", void 0);
__decorate([
    Expose({ name: 'stalls' }),
    IsDefined({ message: 'El parametro stalls es obligatorio' }),
    IsInt({ message: 'El parametro stalls debe ser un número' }),
    __metadata("design:type", Number)
], Automovil.prototype, "Capacidad", void 0);
__decorate([
    Expose({ name: 'price' }),
    IsDefined({ message: 'El parametro price es obligatorio' }),
    IsInt({ message: 'El parametro price debe ser un número' }),
    __metadata("design:type", Number)
], Automovil.prototype, "Precio_Diario", void 0);
