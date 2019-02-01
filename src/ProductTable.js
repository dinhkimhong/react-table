import React, {Component} from "react";
import TableRow from "./TableRow";


class ProductTable extends Component{
	render(){
		const products = this.props.products.map(product=><TableRow key={product.id} product={product} handleRemoveRow={this.props.handleRemoveRow} handleChange={this.props.handleChange}/>)
		return(
			<table className="table table-bordered form-group">

				<thead>
	                    <tr>
	                        <th scope="col">Material Number</th>
	                        <th scope="col">Material Name</th>
	                        <th scope="col">Unit</th>
	                        <th scope="col">Quantity</th>
	                        <th scope="col">Unit Price</th>
	                        <th scope="col">Amount</th>
	                        <th scope="col"><button className="btn btn-primary" onClick={this.props.handleAddRow}>Add</button>
	                        </th>
	                    </tr>
	            </thead>
	            <tbody>
	            	{products}

	            </tbody>

	        </table>

		)
	}

}

export default ProductTable;