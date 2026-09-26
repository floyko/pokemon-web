import { ComponentFixture, TestBed } from "@angular/core/testing";
import { PokemonSearchModal } from "./pokemon-search-modal";

describe("PokemonSearchModal", () => {
  let component: PokemonSearchModal;
  let fixture: ComponentFixture<PokemonSearchModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonSearchModal],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonSearchModal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
