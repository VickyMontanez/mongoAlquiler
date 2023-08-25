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
import { IsDefined, IsString, IsInt } from 'class-validator';
export class Sucursal {
    constructor(data) {
        Object.assign(this, data);
        this.id_sucursal = 0;
        this.nombre = "";
        this.direccion = "";
        this.telefono = "";
    }
}
__decorate([
    Expose({ name: ' id_sucursal' }),
    IsDefined({ message: 'The parameter id_sucursal is required' }),
    IsInt({ message: 'The parameter id_sucursal must be a number' }),
    __metadata("design:type", Number)
], Sucursal.prototype, "id_sucursal", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: 'The parameter nombre is required' }),
    IsString({ message: 'The parameter nombre must be a string' }),
    __metadata("design:type", String)
], Sucursal.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'direccion' }),
    IsDefined({ message: 'The parameter direccion is required' }),
    IsString({ message: 'The parameter direccion must be a string' }),
    __metadata("design:type", String)
], Sucursal.prototype, "direccion", void 0);
__decorate([
    Expose({ name: 'telefono' }),
    IsDefined({ message: 'The parameter telefono is required' }),
    IsString({ message: 'The parameter telefono must be a string' }),
    __metadata("design:type", String)
], Sucursal.prototype, "telefono", void 0);
