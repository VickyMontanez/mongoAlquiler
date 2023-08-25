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
import { IsDefined, IsInt } from 'class-validator';
export class SucuAutomovil {
    constructor(data) {
        Object.assign(this, data);
        this.id_sucursal_id = 0;
        this.id_automovil_id = 0;
        this.cantidad_disponible = 0;
    }
}
__decorate([
    Expose({ name: 'id_sucursal_id' }),
    IsDefined({ message: 'The parameter id_sucursal_id is required' }),
    IsInt({ message: 'The parameter id_sucursal_id must be a number' }),
    __metadata("design:type", Number)
], SucuAutomovil.prototype, "id_sucursal_id", void 0);
__decorate([
    Expose({ name: 'id_automovil_id' }),
    IsDefined({ message: 'The parameter id_automovil_id is required' }),
    IsInt({ message: 'The parameter id_automovil_id must be a number' }),
    __metadata("design:type", Number)
], SucuAutomovil.prototype, "id_automovil_id", void 0);
__decorate([
    Expose({ name: 'cantidad_disponible' }),
    IsDefined({ message: 'The parameter cantidad_disponible is required' }),
    IsInt({ message: 'The parameter cantidad_disponible must be a number' }),
    __metadata("design:type", Number)
], SucuAutomovil.prototype, "cantidad_disponible", void 0);
