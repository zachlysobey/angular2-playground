import {bootstrap, Component} from 'angular2/angular2';

@Component({
    selector: 'sub-component',
    template: '<h2>Sub Component</h2>'
})
class SubComponent {}

// bootstrap(SubComponent);

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <sub-component></sub-component>
    `,
    styles: [`
        h1 { font-family: fantasy; }
    `],
    directives: [
        SubComponent
    ]
})
class AppComponent {
    public title = 'My 2nd Angular 2 App with a sub-component';
}

bootstrap(AppComponent);
