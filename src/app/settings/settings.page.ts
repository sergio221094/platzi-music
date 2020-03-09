import { Component } from "@angular/core";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";
import { SafeResourceUrl, DomSanitizer } from "@angular/platform-browser";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.page.html",
  styleUrls: ["./settings.page.scss"]
})
export class SettingsPage {
  user: {
    email: string;
    nombre: string;
    apellido: string;
  } = {
    email: "example@test.com",
    nombre: "ExampleName",
    apellido: "ExampleLastname"
  };
  userImage = "assets/img/user.png";
  photo: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer, private storage: Storage) {}

  ionViewDidEnter() {
    this.getUser();
  }

  async getUser() {
    const user = await this.storage.get("user");
    return new Promise((accept, reject) => {
      this.user = user;
    });
  }

  async takePhoto() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(
      image && image.dataUrl
    );
  }
}
