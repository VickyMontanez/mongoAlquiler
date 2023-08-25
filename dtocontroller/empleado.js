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
import { IsDefined, IsString } from 'class-validator';
export class Empleado {
    constructor(data) {
        Object.assign(this, data);
        this.id_empleado = 0;
        this.nombre = "";
        this.apellido = "";
        this.dni = "";
        this.direccion = "";
        this.telefono = "";
        this.cargo = "";
    }
}
__decorate([
    Expose({ name: 'empleado' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parametro empleado es obligatorio` }; } }),
    __metadata("design:type", Number)
], Empleado.prototype, "id_empleado", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: 'The parameter nombre is required' }),
    IsString({ message: 'The parameter nombre must be a string' }),
    __metadata("design:type", String)
], Empleado.prototype, "nombre", void 0);
__decorate([
    Expose({ name: 'apellido' }),
    IsDefined({ message: 'The parameter apellido is required' }),
    IsString({ message: 'The parameter apellido must be a string' }),
    __metadata("design:type", String)
], Empleado.prototype, "apellido", void 0);
__decorate([
    Expose({ name: 'dni' }),
    IsDefined({ message: 'The parameter DNI is required' }),
    IsString({ message: 'The parameter DNI must be an object' }),
    __metadata("design:type", String)
], Empleado.prototype, "dni", void 0);
__decorate([
    Expose({ name: 'direccion' }),
    IsDefined({ message: 'The parameter direccion is required' }),
    IsString({ message: 'The parameter direccion must be a string' }),
    __metadata("design:type", String)
], Empleado.prototype, "direccion", void 0);
__decorate([
    Expose({ name: 'telefono' }),
    IsDefined({ message: 'The parameter telefono is required' }),
    IsString({ message: 'The parameter telefono must be a string' }),
    __metadata("design:type", String)
], Empleado.prototype, "telefono", void 0);
__decorate([
    Expose({ name: 'cargo' }),
    IsDefined({ message: `El parametro ocupation es obligatorio` }),
    IsString({ message: 'The parameter cargo must be a string' }),
    __metadata("design:type", String)
], Empleado.prototype, "cargo", void 0);
;
