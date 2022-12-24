import { TestBed } from '@angular/core/testing';

import { PostsService } from './produit.service';

describe('ProduitService', () => {
  let service: PostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
