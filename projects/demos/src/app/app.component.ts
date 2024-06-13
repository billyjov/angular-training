import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  signal,
  computed,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private c = 10;

  private firstSignal = signal<number>(1);
  private secondSignal = signal<number>(2);

  public valueOfCSignal = computed(() => {

    console.warn('## HOW MANY TIMES WAS YOU CALLED? ##')
    return this.firstSignal() + this.secondSignal() + this.c;
  });

  constructor() {}

  ngOnInit(): void {
    let a = 1;
    let b = 2;

    let c = a + b;

    console.log(c);

    a = 20;

    console.log(c);

    // Signal

    const aSignal = signal<number>(1);
    const bSignal = signal<number>(2);

    // const cSignal = aSignal() + bSignal();

    const cSignal = computed(() => {
      console.log('HELLO I AM COMPUTED');
      return aSignal() + bSignal();
    });
    console.log('SIGNAL FIRST: ', cSignal());

    aSignal.set(20);


    console.log('SIGNAL SECOND', cSignal());
  }

  public sum(a: number, b: number): number {
    return a + b + this.c;
  }

  public valueOfC(): number {
    console.warn('GET VALUE OF C');
    return this.c;
  }

  public changeCSignal(): void {
    this.secondSignal.set(10);
    this.secondSignal.set(12);
    this.secondSignal.set(15);
    this.secondSignal.set(13);
  }

  public setStaticC(): void {
    this.c = 100;
  }
}
