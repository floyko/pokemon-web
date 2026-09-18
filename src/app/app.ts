import { Component, signal } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { Pokedex } from "./pages/pokedex/pokedex";

@Component({
  // imports: [RouterOutlet],
  selector: "app-root",
  styleUrl: "./app.scss",
  templateUrl: "./app.html",
  imports: [Pokedex],
})
export class App {
  protected readonly title = signal("pokemon-web");
}
