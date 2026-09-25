import { Component, output, OutputEmitterRef, signal, WritableSignal } from "@angular/core";
import { LucideSearch, LucideX } from "@lucide/angular";

@Component({
  imports: [LucideSearch, LucideX],
  selector: "app-search-bar",
  styleUrl: "./search-bar.scss",
  templateUrl: "./search-bar.html",
})
export class SearchBar {
  searchTerm: WritableSignal<string> = signal<string>("");
  searchSubmitted: OutputEmitterRef<string> = output<string>();

  onSearch(): void {
    const term = this.searchTerm().trim();

    if (!term) {
      return;
    }
    this.searchSubmitted.emit(term);
  }
}