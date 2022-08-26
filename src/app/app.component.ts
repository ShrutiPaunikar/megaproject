import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'megaproject';
  name ='';
  price = '';

  
  menuList:any = [
    {
      name:'Rice',
      price:120,
      url:'../assets/rice.webp'
    },
    {
      name:'Chicken',
      price:200,
      url:'../assets/chick.jfif'
    },
    {
      name:'Dosa',
      price:100,
      url:'../assets/dosa1.jfif'
    },
    {
      name:'Noodles',
      price:120,
      url:'../assets/noodles.jfif'
    },
  
    {
      name:'Momos',
      price:100,
      url:'../assets/momos.jfif'
    },
    {
      name:'Burger',
      price:120,
      url:'../assets/burger.jfif'
    },
    {
      name:'Pizza',
      price:150,
      url:'../assets/pizza.jfif'
    },
    {
      name:'Biryani',
      price:150,
      url:'../assets/biryani.jfif'
    },

  ];
  cartList:any = [];
  kitchenList:any = [];
  totalCount = 0;
  totalAmount = 0;

  selectItem(i:any){
    this.cartList.push(this.menuList[i]);
    console.log('selectItem',i);
    this.totalCount=0;
    this.cartList.forEach((element:any) => {
      this.totalCount = this.totalCount + element.price;
  });
  }
  
  delete(i:any){
    this.totalCount = this.totalCount - this.cartList[i].price;
    this.cartList.splice(i,1);

}

  placeOrder(){
    this.totalAmount=0;
    this.kitchenList = this.cartList;
    this.cartList = [];
    this.kitchenList.forEach((element:any) => {
    this.totalAmount = this.totalAmount + element.price;
     this.totalCount = 0;
    });
    
  }
  submit(){
    let object={
      name:this.name,
      price:this.price
    }
    this.menuList.push(object);
    this.name = '',
    this.price = '',
    console.log('dishes',object)
  }
  cancel(){
    this.name="";
    this.price="";
  }


}


