import { TipoOperacion } from "../enums/TipoOperacion.enum";
import { Zona } from "./Zona";

export abstract class Inmueble{

    protected metrosCuadrados: number;
    protected cantAmbientes: number;
    protected tipoOperacion: TipoOperacion;
    protected zona: Zona;

    constructor(metrosCuadrados: number, cantAmbientes: number, tipoOperacion: TipoOperacion, zona: Zona){
        this.metrosCuadrados = metrosCuadrados;
        this.cantAmbientes = cantAmbientes;
        this.tipoOperacion = tipoOperacion;
        this.zona = zona;
    }


    public abstract calcularValorInmueble():number;

    public c() {
        return "";
    }
    
}