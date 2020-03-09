import { Component } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: "app-album-modal",
  templateUrl: "./album-modal.page.html",
  styleUrls: ["./album-modal.page.scss"]
})
export class AlbumModalPage{
  tracks: any[];
  artist: string;
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}

  ionViewDidEnter() {
    this.tracks = this.navParams.data.songs;
    this.artist = this.navParams.data.album;
  }

  async selectSong(track) {
    await this.modalController.dismiss(track);
  }
}
