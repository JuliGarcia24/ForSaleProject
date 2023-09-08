import { Empleado } from "./Empleado";
import { Inmueble } from "./Inmueble";

export abstract class Operacion{

    protected empleado: Empleado;
    protected comision: number;
    protected inmueble: Inmueble;
 
    public abstract calcularComision(): number;


}