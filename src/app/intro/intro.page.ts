import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
@Component({
  selector: "app-intro",
  templateUrl: "./intro.page.html",
  styleUrls: ["./intro.page.scss"]
})
export class IntroPage {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 400
  };
  slides = [
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Platzi Music Logo",
      title: "Listen to your music",
      subTitle: "ANYWHERE",
      description: `The best albums, the best songs. Listen and share in any time, at all hours.`,
      icon: "play"
    },
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Platzi Music Logo",
      title: "Enjoy our",
      subTitle: "INCREDIBLE VIDEO PLAYER",
      description: `Enter the video mode of our player and get access to clips, Incredible documentaries and making offs of your favorite artist.`,
      icon: "videocam"
    },
    {
      imageSrc: "assets/img/logo.png",
      imageAlt: "Platzi Music Logo",
      title: "Access the exclusive",
      subTitle: "SPORTS MODE",
      description: `Create a playlist based on your physical activity. Have reports and access to what you need, integrated with GPS!`,
      icon: "bicycle"
    }
  ];
  constructor(private router: Router, private storage: Storage) {}
  finish() {
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/login");
  }
}
