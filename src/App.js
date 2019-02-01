import React, {Component} from "react";
import ProductTable from "./ProductTable";

class App extends Component{

	constructor(){
		super();
		this.state={};
		this.state.products=[
			{
				id: 1,
				materialNumber: "1",
				materialName: "Pencil",
				unit: "EA",
				quantity: 20,
				unitPrice: 30,
				amount: ""
			},
			{
				id: 2,
				materialNumber: "2",
				materialName: "Book",
				unit: "M",
				quantity: 10,
				unitPrice: 40,
				amount: ""
			},
		];
		this.handleAddRow = this.handleAddRow.bind(this);
		this.handleRemoveRow = this.handleRemoveRow.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount(){
		this.setState(prevState =>{
			const updateProducts = prevState.products.map(product => {
				product.amount = product.unitPrice * product.quantity;
				return product;
			})
			return {
				products: updateProducts
			}
		})
	}

	handleAddRow(){
        var id = Math.floor(Math.random() * 100000);
        var product = {
            id: id,
            materialNumber: "",
            materialName:"",
            unit: "",
            unitPrice: "",
            quantity: "",
            amount: ""
        }
        this.state.products.push(product);
        this.setState(this.state.products);
	}

	handleRemoveRow(product){
		var index = this.state.products.indexOf(product);
		this.state.products.splice(index,1);
		this.setState(this.state.products);
	}

	handleChange(event){
        var newProduct = {
            id: event.target.id,
            name: event.target.name,
            value: event.target.value
        }

        this.setState(prevState =>{
            const updateProducts = prevState.products.map(product => {
            	for(var key in product){
	                if(key == newProduct.name && product.id == newProduct.id){
	                    product[key] = newProduct.value;
	                    product.amount = product.unitPrice * product.quantity;
	                }
	            }
                return product;
            })
            return {
                products: updateProducts
            }
        })
	}

	render(){
		return (
			<ProductTable 
				products = {this.state.products} 
				handleAddRow={this.handleAddRow} 
				handleRemoveRow={this.handleRemoveRow} 
				handleChange = {this.handleChange}
			/>
		)
	}

}

export default App;