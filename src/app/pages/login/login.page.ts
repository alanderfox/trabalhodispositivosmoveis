import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public input_login: string;
  public input_senha: string;

  private user: string = "madson";
  private password: string = "123";

  constructor(
    private alertCtrl: AlertController,
    private router: Router
    ) { }

  ngOnInit() {
  }

  ionViewCanLeave() {
    const shouldLeave = this.confirmLeave();
    return shouldLeave;
  }
  
  async confirmLeave(): Promise<Boolean> {
    let resolveLeaving;
    const canLeave = new Promise<Boolean>(resolve => resolveLeaving = resolve);


    if (this.input_login == this.user && this.input_senha == this.password) {
      resolveLeaving(true);
      this.router.navigateByUrl("/home");
    } else {
      this.showAlert();
      resolveLeaving(false);
    }

    return canLeave
  }

  async showAlert() {
    const alert = this.alertCtrl.create({ 
      message: 'Usuário ou senha incorretos!',
      buttons: [
        {
          text: 'OK',
          role: 'Ok',
        },
      ]
    });
    (await alert).present();
  }

  logForm() {
    console.log("Enter")
    console.log(this.input_login)
    console.log(this.input_senha)
    this.confirmLeave()
    
  }

}
