import React, { useState } from 'react';
import EmailIcon from '@material-ui/icons/Email';
import HelpIcon from '@material-ui/icons/Help';
import img from '../../images/foo.PNG'
import img1 from '../../images/foo1.PNG'
import img2 from '../../images/pay.PNG'


function footer() {

    return <>
        <div class="container-fluid foo">
            <div class="row">

                <div class="col ">

                    <h5>We're Always Here To Help</h5>
                    <p>Reach out to us through any of these support channels</p>
                </div>
                <div class="col">
                    <h5> <HelpIcon />HELP CENTER</h5>
                    help.noon.com
                </div>
                <div class="col">
                    <h5><EmailIcon />EMAIL SUPPORT</h5>
                    care@noon.com

                </div>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row">
                <div class="col ">
                    <ul class="stl">

                        <li>ELECTRONICS</li>
                        <li>Mobiles</li>
                        <li>Tablets</li>
                        <li>Laptops</li>
                        <li>Home Appliances</li>
                        <li>Camera, Photo & Video</li>
                        <li>Televisions</li>
                        <li>Headphones</li>
                        <li>Video Games</li>

                    </ul>


                </div>
                <div class="col">
                    <ul class="stl">
                        <li>Fashion</li>
                        <li>Women's Fashion</li>
                        <li>Men's Fashion</li>
                        <li>Girls' Fashion</li>
                        <li>Boys' Fashion</li>
                        <li>Watches</li>
                        <li>Jewellery</li>
                        <li>Women's Handbags</li>
                        <li>Men's Eyewear</li>


                    </ul>
                </div>
                <div class="col">
                    <ul class="stl">
                        <li>HOME AND KITCHEN</li>
                        <li>Bath</li>
                        <li>Home Decor</li>
                        <li>Kitchen & Dining</li>
                        <li>Tools & Home Improvement</li>
                        <li>Audio & Video</li>
                        <li>Furniture</li>
                        <li>Patio, Lawn & Garden</li>
                        <li>Pet Supplies</li>


                    </ul>
                </div>

                <div class="col">
                    <ul class="stl">
                        <li>BEAUTY</li>
                        <li>Fragrance</li>
                        <li>Make-Up</li>
                        <li>Haircare</li>
                        <li>Skincare</li>
                        <li>Personal Care</li>
                        <li>Tools & Accessories</li>
                        <li>Men's Grooming</li>
                        <li>Health Care Essentials</li>


                    </ul>
                </div>

                <div class="col">
                    <ul class="stl">
                        <li>BABY</li>
                        <li>Strollers & Prams</li>
                        <li>Car Seats</li>
                        <li>Feeding</li>
                        <li>Bathing & Skincare</li>
                        <li>Diapering</li>
                        <li>Baby Clothing & Shoes</li>
                        <li>Baby & Toddler Toys</li>
                        <li>Baby Foods</li>


                    </ul>
                </div>


                <div class="col">
                    <ul class="stl">
                        <li>Top BRANDS</li>
                        <li>Mothercare</li>
                        <li>Apple</li>
                        <li>Nike</li>
                        <li>Samsung</li>
                        <li>Tefal</li>
                        <li>L'Oreal Paris</li>
                        <li>Skechers</li>
                        <li>Silsal</li>


                    </ul>
                </div>


                <div class="col">
                    <ul class="stl">
                        <li>DAILY GROCERIES</li>
                        <li>Fresh Produce</li>
                        <li>Dairy & Eggs</li>
                        <li>Bread & Bakery</li>
                        <li>Meat & Seafood</li>
                        <li>Breakfast Food</li>
                        <li>Pantry Staples</li>
                        <li>Household Supplies</li>
                        <li>Personal Care</li>


                    </ul>
                </div>


                <div class="col">
                    <img src={img} alt=""></img>
                </div>

                <div class="col">
                    <img src={img1} alt=""></img>
                </div>


                <div class="col">
                    <p>© 2021 noon. All Rights Reserved</p>
                </div>
                <div class="col">
                    <img src={img2} alt=""></img>
                </div>

                <div class="col">
                    Careers
                    Warranty Policy
                    Sell with us
                    Terms of Use
                    Terms of Sale
                    Privacy Policy
                    Consumer Rights
                </div>

            </div>
        </div>

    </>
}
export default footer










