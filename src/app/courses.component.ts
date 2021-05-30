import { CoursesService } from './courses.service';
import { Component } from '@angular/core';

@Component({
    // <button class="btn btn-primary" [class.active]="isActive" [style.backgroundColor]="isActive ? 'blue' : 'white'">Save</button>
    selector: 'courses',
    template: `
        {{ text | summary:10 }}
    `
})

export class CoursesComponent {
    // Creamos un objeto 'course'
    text = `Lorem ipsum dolor sit amet consectetur adipiscing elit iaculis metus, interdum phasellus sed mi porttitor nunc vestibulum class ligula, dictum feugiat eros maecenas mattis sociosqu vel vitae. Velit laoreet mauris per pharetra quam nostra potenti, neque quis sociosqu congue nullam vulputate scelerisque, integer class euismod taciti augue vehicula. Mattis faucibus sed natoque libero nisi morbi dignissim magna laoreet cum ad, semper per molestie luctus varius tellus tortor nec vitae quisque.`
}