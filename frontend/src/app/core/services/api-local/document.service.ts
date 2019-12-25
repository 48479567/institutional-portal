import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class DocumentService {
  constructor(@Inject(DOCUMENT) public document: Document) {
  }
}
