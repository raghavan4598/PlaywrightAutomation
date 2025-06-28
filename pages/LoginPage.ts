import{Locator} from "playwright";

export class LoginPage{

    private username: Locator;
    private password: Locator;
    private loginButton: Locator; 
   errorMessage: Locator;
   homePageIdentifier:Locator;
   private page:Page;

   constructor(page){
    this.page=page;
    this.username=this.page.getByPlaceholder("email@example.com");
    this.password=this.page.getByPlaceholder("enter your passsword");
    this.loginButton=this.page.getByRole("button", {name: "Login"});
    this.errorMessage=this.page.locator("#toast-container");
    this.homePageIdentifier=this.page.locator(".fa-sign-out");

   }
async launchURL(url){
    await this.page.goto(url);
}


async validLogin(username:string, password:string){

    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginButton.click();

}

async invalidLogin(username,Incorrectpassword){

    await this.username.fill(username);
    await this.password.fill(Incorrectpassword);
    await this.loginButton.click();
   

}
}