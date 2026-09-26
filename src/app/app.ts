import { Component, signal } from "@angular/core";
import { Pokedex } from "./pages/pokedex/pokedex";

@Component({
  selector: "app-root",
  styleUrl: "./app.scss",
  templateUrl: "./app.html",
  imports: [Pokedex],
})
export class App {
  protected readonly title = signal("pokemon-web");
}
