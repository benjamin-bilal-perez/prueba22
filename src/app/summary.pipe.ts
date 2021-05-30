import { Pipe, PipeTransform } from '@angular/core';

// pipe decorator function, y le ponemos un obejeto
@Pipe({
    name: 'summary' // summary porque le habíamos puesto summary anteriormente, en el nombre del pipe
})
export class SummaryPipe implements PipeTransform {
    // Recordemos que '?' es para los parámetros que no son obligatorios
    transform(value: string, limit?: number) {
        // Basic validation:
        if (!value)
            return null;
        /*
        Si tiene límite lo usammos,
        y si no usamos 50 (valor por defecto)
        */
        let actualLimit = (limit) ? limit : 50;
        return value.substr(0, actualLimit) + '...';
    }
}