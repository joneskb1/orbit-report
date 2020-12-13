import { Component, OnInit, Input } from "@angular/core";
import { Satellite } from "../satellite";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

@Component({
  selector: "app-orbit-counts",
  templateUrl: "./orbit-counts.component.html",
  styleUrls: ["./orbit-counts.component.css"],
})
export class OrbitCountsComponent implements OnInit {
  @Input() satellites: Satellite[];

  constructor() {}

  ngOnInit() {}

  calCounts(): number {
    return this.satellites.length;
  }

  calSD(): number {
    let spaceDebris: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type === "Space Debris") {
        spaceDebris += 1;
      }
    }
    return spaceDebris;
  }

  calComm(): number {
    let communication: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type === "Communication") {
        communication += 1;
      }
    }
    return communication;
  }
  calProbe(): number {
    let probe: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type === "Probe") {
        probe += 1;
      }
    }
    return probe;
  }
  calPosition(): number {
    let position: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type === "Positioning") {
        position += 1;
      }
    }
    return position;
  }
  calSS(): number {
    let spaceStation: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type === "Space Station") {
        spaceStation += 1;
      }
    }
    return spaceStation;
  }
  calTele(): number {
    let tele: number = 0;
    for (let i = 0; i < this.satellites.length; i++) {
      if (this.satellites[i].type === "Telescope") {
        tele += 1;
      }
    }
    return tele;
  }
}
