import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { CriteriasService } from './criterias.service';

describe('CriteriasService', () => {
	let service: CriteriasService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [HttpClientModule],
		});
		service = TestBed.inject(CriteriasService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
