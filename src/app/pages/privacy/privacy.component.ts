import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Shield, ArrowLeft } from 'lucide-angular';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [RouterLink, LucideAngularModule],
  template: `
    <div class="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans px-4 py-12">
      <div class="max-w-3xl mx-auto w-full">
        
        <a routerLink="/" class="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
          <i-lucide [name]="ArrowLeft" class="w-4 h-4"></i-lucide>
          Voltar para a Página Principal
        </a>

        <div class="bg-slate-900/60 p-8 rounded-3xl border border-slate-800 backdrop-blur-xl shadow-2xl space-y-6">
          
          <div class="flex items-center gap-3 pb-6 border-b border-slate-800">
            <div class="w-12 h-12 rounded-2xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <i-lucide [name]="Shield" class="w-6 h-6"></i-lucide>
            </div>
            <div>
              <h1 class="text-2xl font-black text-white">Política de Privacidade</h1>
              <p class="text-xs text-slate-400">AprovaCiclo • Atualizado em 2026</p>
            </div>
          </div>

          <div class="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
            <p>
              O <strong class="text-white">AprovaCiclo</strong> foi desenvolvido com foco total na privacidade do concurseiro. Operamos sob a premissa de que os seus dados de estudo pertencem exclusivamente a você.
            </p>

            <div class="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <h3 class="text-emerald-400 font-bold text-xs uppercase tracking-wider">1. Ausência de Cadastro e Servidores (Local-First)</h3>
              <p class="text-xs text-slate-300">
                O AprovaCiclo <strong class="text-white">não exige criação de conta, login ou senha</strong>. Não possuímos servidores em nuvem ou bancos de dados centralizados para armazenar suas informações. Todos os ciclos de estudo, disciplinas, editais verticalizados, cronogramas e marcações de tempo são salvos unicamente no armazenamento interno do seu próprio aparelho (banco de dados SQLite local).
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <h3 class="text-amber-400 font-bold text-xs uppercase tracking-wider">2. Publicidade (Google AdMob)</h3>
              <p class="text-xs text-slate-300">
                Para viabilizar a gratuidade do aplicativo, utilizamos o SDK do <strong class="text-white">Google AdMob</strong> para exibição de anúncios. O AdMob pode coletar identificadores técnicos do dispositivo e dados de uso estritamente necessários para a veiculação de anúncios, em conformidade com as políticas do Google.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <h3 class="text-indigo-400 font-bold text-xs uppercase tracking-wider">3. Compartilhamento de Dados</h3>
              <p class="text-xs text-slate-300">
                Como não coletamos informações pessoais e todo o seu progresso fica confinado no seu dispositivo, <strong class="text-white">não há qualquer venda, aluguel ou compartilhamento de dados</strong> com terceiros.
              </p>
            </div>

            <div class="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 space-y-2">
              <h3 class="text-slate-200 font-bold text-xs uppercase tracking-wider">4. Contato de Suporte</h3>
              <p class="text-xs text-slate-400">
                Em caso de dúvidas sobre esta política ou funcionamento do app, entre em contato através do e-mail: <span class="text-indigo-300 font-semibold">suporte.aprovaciclo&#64;gmail.com</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  `
})
export class PrivacyComponent {
  readonly Shield = Shield;
  readonly ArrowLeft = ArrowLeft;
}