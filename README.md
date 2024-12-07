# AngularI18nApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server
touch .npmrc

echo "prefix=/var/tmp/mine/code/angular/shared_node_modules" > ~/.npmrc

ng new angular-i18n-app --skip-install

cd angular-i18n-app

pnpm install --store-dir /var/tmp/mine/code/angular/shared_node_modules  //Since .nprc is availabe --store-dir may not require


if want to do something like ng add @angular/localize

pnpm install --store-dir /var/tmp/mine/code/angular/shared_node_modules @angular/localize

ng g @angular/localize:ng-add




Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


rm -rf ~/.local/share/pnpm
pnpm config set store-dir /var/tmp/pnpm_store --global
pnpm add -D @angular/cli@18.0.0 @angular-devkit/build-angular@18.0.0 @angular/core@18.0.0 @angular/common@18.0.0 @angular/platform-browser-dynamic@18.0.0
pnpm add -D cypress
pnpm add -g cypress
ng new angularcypressprj --package-manager=pnpm
pnpm cypress open
