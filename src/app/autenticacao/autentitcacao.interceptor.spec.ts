import { TestBed } from '@angular/core/testing';

import { AutentitcacaoInterceptor } from './autentitcacao.interceptor';

describe('AutentitcacaoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AutentitcacaoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AutentitcacaoInterceptor = TestBed.inject(AutentitcacaoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
