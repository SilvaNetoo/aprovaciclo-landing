import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { 
  LucideAngularModule, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Calendar, 
  Smartphone, 
  Download, 
  CheckCircle2, 
  Clock, 
  Award,
  Menu,
  X
} from 'lucide-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  readonly Zap = Zap;
  readonly ShieldCheck = ShieldCheck;
  readonly Cpu = Cpu;
  readonly Calendar = Calendar;
  readonly Smartphone = Smartphone;
  readonly Download = Download;
  readonly CheckCircle2 = CheckCircle2;
  readonly Clock = Clock;
  readonly Award = Award;
  readonly Menu = Menu;
  readonly X = X;

  mobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }
}