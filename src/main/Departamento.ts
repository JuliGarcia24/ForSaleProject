import { Inmueble } from "./Inmueble";

export class Departamento extends Inmueble{

    public static valorAmbiente: number = 350000;

    public calcularValorInmueble(): number {
        throw Departamento.valorAmbiente * super.cantAmbientes;
    }

    public a() {
        return "";
    }
    
}