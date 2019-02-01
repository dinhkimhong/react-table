import React, {Component} from "react";


class TableRow extends Component{

	render(){
		return(
			<tr>
                <td><input type="text" name="material_number[]" className="form-control material_number" value={this.props.product.materialNumber}/></td>
                <td><input type="text" name="material_description" className="form-control material_description" value={this.props.product.materialName} /></td>
                <td><input type="text" name="unit" className="form-control unit" value={this.props.product.unit} /></td>
                <td><input type="number" id={this.props.product.id} name="quantity" className="form-control quantity" value={this.props.product.quantity} onChange={this.props.handleChange} /></td>
                <td><input type="number" id={this.props.product.id} name="unitPrice" className="form-control unit_price" value={this.props.product.unitPrice} onChange={this.props.handleChange}/></td>
                <td><input type="number" name="amount" className="form-control amount" value={this.props.product.amount} /></td>
                <td><button className="btn btn-danger" onClick={()=>this.props.handleRemoveRow(this.props.product)}>Remove</button></td>
            </tr>  
		)
	}

}

export default TableRow;