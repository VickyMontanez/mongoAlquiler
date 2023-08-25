import { Expose, Transform } from 'class-transformer';
import { IsDefined , IsInt } from 'class-validator';
export class SucuAutomovil {

    @Expose({ name: 'id_sucursal_id' })
    @IsDefined({message: 'The parameter id_sucursal_id is required'})
    @IsInt({ message: 'The parameter id_sucursal_id must be a number' })
    id_sucursal_id: number;

    @Expose({ name: 'id_automovil_id' })
    @IsDefined({ message: 'The parameter id_automovil_id is required' })
    @IsInt({ message: 'The parameter id_automovil_id must be a number' })
    id_automovil_id: number;

    @Expose({ name: 'cantidad_disponible' })
    @IsDefined({ message: 'The parameter cantidad_disponible is required' })
    @IsInt({ message: 'The parameter cantidad_disponible must be a number' })
    cantidad_disponible: number;

    constructor(data: Partial<SucuAutomovil>) {
        Object.assign(this, data);
        this.id_sucursal_id = 0;
        this.id_automovil_id = 0;
        this.cantidad_disponible = 0;
        
    }

}