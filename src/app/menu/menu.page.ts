import { Component } from "@angular/core";
import { MenuController } from "@ionic/angular";
import { NavController } from "@ionic/angular";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.page.html",
  styleUrls: ["./menu.page.scss"]
})
export class MenuPage {
  constructor(
    private menu: MenuController,
    private navCtrl: NavController,
    private storage: Storage
  ) {}

  closeMenu() {
    this.menu.close();
  }
  logout() {
    this.storage.remove("isUserLoggedIn");
    this.navCtrl.navigateRoot("/login");
  }
  goTo(path){
    switch(path){
      case "Home":
        this.navCtrl.navigateForward("/menu/home");
      break;
      case "Sports":
        this.navCtrl.navigateForward("/menu/sports");
      break;
      case "Settings":
        this.navCtrl.navigateForward("/menu/settings");
      break;
    }
    this.menu.close();
  }
}
