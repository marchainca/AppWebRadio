import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { By } from '@angular/platform-browser';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent], // Para componentes standalone
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Detecta los cambios iniciales
  });

  it('debe crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar el menú hamburguesa y cambiar el icono al hacer clic', () => {
    const menuIcon = fixture.debugElement.query(By.css('.menu-icon'));
    const iconBeforeClick = menuIcon.nativeElement.querySelector('i').className;

    expect(iconBeforeClick).toBe('bi bi-list'); // Icono inicial hamburguesa

    menuIcon.triggerEventHandler('click', null); // Simula el clic en el botón hamburguesa
    fixture.detectChanges();

    const iconAfterClick = menuIcon.nativeElement.querySelector('i').className;
    expect(iconAfterClick).toBe('bi bi-x'); // Icono debe cambiar a "cerrar"

    menuIcon.triggerEventHandler('click', null); // Cierra el menú al hacer clic de nuevo
    fixture.detectChanges();

    const iconAfterSecondClick = menuIcon.nativeElement.querySelector('i').className;
    expect(iconAfterSecondClick).toBe('bi bi-list'); // Vuelve al icono hamburguesa
  });

  it('debe mostrar el menú al hacer clic y cerrarlo al seleccionar una opción', () => {
    const menuIcon = fixture.debugElement.query(By.css('.menu-icon'));
    const menu = fixture.debugElement.query(By.css('.desktop_menu'));

    expect(menu.classes['mobile_menu']).toBeFalsy(); // El menú está cerrado inicialmente

    menuIcon.triggerEventHandler('click', null); // Abre el menú
    fixture.detectChanges();

    expect(menu.classes['mobile_menu']).toBeTruthy(); // El menú está abierto

    const firstMenuItem = fixture.debugElement.query(By.css('.desktop_menu ul li'));
    firstMenuItem.triggerEventHandler('click', null); // Simula un clic en la primera opción
    fixture.detectChanges();

    expect(menu.classes['mobile_menu']).toBeFalsy(); // El menú se cierra al hacer clic en una opción
  });
});
