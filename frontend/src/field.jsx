import './ProductForm.css';
import { useState } from 'react';
import Button from './Button.jsx';

function Field() {
  const [formData, setFormData] = useState({
    productName: '',
    productPrice: '',
    productCategory: '',
    productDescription: '',
    productImage: '',
    productStock: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/products', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      alert('Product added successfully');
      console.log(result);

      setFormData({
        productName: '',
        productPrice: '',
        productCategory: '',
        productDescription: '',
        productImage: '',
        productStock: '',
      });
    } catch (error) {
      console.error('Error saving product:', error);
      alert('Error saving product: ' + error.message);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>Add Product</h2>

      <label>Product Name:</label>
      <input
        type="text"
        name="productName"
        value={formData.productName}
        onChange={handleChange}
        placeholder="Enter product name"
        required
      />

      <label>Product Price:</label>
      <input
        type="text"
        name="productPrice"
        value={formData.productPrice}
        onChange={handleChange}
        placeholder="Enter product price"
        required
      />

      <label>Product Category:</label>
      <input
        type="text"
        name="productCategory"
        value={formData.productCategory}
        onChange={handleChange}
        placeholder="Enter product category"
        required
      />

      <label>Product Description:</label>
      <input
        type="text"
        name="productDescription"
        value={formData.productDescription}
        onChange={handleChange}
        placeholder="Enter product description"
        required
      />

      <label>Product Image:</label>
      <input
        type="text"
        name="productImage"
        value={formData.productImage}
        onChange={handleChange}
        placeholder="Enter product image URL"
        required
      />

      <label>Product Stock:</label>
      <input
        type="text"
        name="productStock"
        value={formData.productStock}
        onChange={handleChange}
        placeholder="Enter product stock"
        required
      />

      <Button type="submit">Save Product</Button>
    </form>
  );
}

export default Field;
