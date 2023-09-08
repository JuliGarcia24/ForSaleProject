import { Operacion } from "./Operacion";

export class Alquiler extends Operacion{

    protected cantMeses: number;

    public calcularComision(): number {
        throw new Error("Method not implemented.");
    }
}