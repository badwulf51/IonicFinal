import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from '@ionic-native/device-motion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

x:string;
y:string; 
z:string;
timeStamp:string;

id: any;


  constructor(public navCtrl: NavController, public deviceMotion: DeviceMotion) {

    this.x = "-";
    this.y = "-";
    this.z = "-";
    this.timeStamp = "-";

  }

  start(){

    try{

      var option: DeviceMotionAccelerometerOptions = 
      {
        frequency: 200
      };

      this.id = this.deviceMotion.watchAcceleration(option).subscribe((acc: DeviceMotionAccelerationData) =>
      {

        this.x = "" + acc.x;
        this.y = "" + acc.y;
        this.z = "" + acc.z;
        this.timeStamp = "" + acc.timestamp;


      }

    );


    }catch(err)
    {
      alert("error: " + err)
    }


  }

  stop(){
this.id.unsubscribe();

  }

}
