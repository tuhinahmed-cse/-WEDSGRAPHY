import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div class="container my-5">

<footer class="bg-light text-center">

<div class="container p-4 pb-0">
 
  <section class="">
    <form action="">
 
      <div class="row d-flex justify-content-center">
     
        <div class="col-auto">
          <p class="pt-2">
            <strong>Sign up for our Services</strong>
          </p>
        </div>
      

       
        <div class="col-md-5 col-12">
          
          <div class="form-outline mb-4">
            <input type="email" id="form5Example2" class="form-control" />
            <label class="form-label" for="form5Example2">Email address</label>
          </div>
        </div>
        
        <div class="col-auto">
       
          <Link to='/register'><button type="submit" class="btn btn-primary mb-4">
            Subscribe
          </button></Link>
        </div>
        
      </div>
     
    </form>
  </section>
  
</div>

<div class="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
  © 2022 Copyright by Tuhin Ahmed
  
</div>

</footer>

</div>
        </div>
    );
};

export default Footer;