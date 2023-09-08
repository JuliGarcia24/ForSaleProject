import { Operacion } from "./Operacion";

export class Venta extends Operacion{

    public static valorComision: number = 1.5;

    public calcularComision(): number {
        throw new Error("Method not implemented.");
    }
    
}