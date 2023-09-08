import { TipoOperacion } from './../enums/TipoOperacion.enum';
import { Inmueble } from "./Inmueble";

export class Ph extends Inmueble{

    public static valorMetroCuadrado: number = 14000;

    // constructor(metrosCuadrados: number, cantAmbientes: number, tipoOperacion: TipoOperacion) {
    //     super(metrosCuadrados, cantAmbientes, tipoOperacion, zona);
    // }
    
    public calcularValorInmueble(): number {
        throw new Error("Method not implemented.");
    }

    public b() {
        return "";
    }
    
}