import React, { useEffect } from "react";
import "./Highlights.css";
import { motion } from "framer-motion";
import Card from "./Card";

function Highlights() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });


let card_data = [
{
    title : "Nazra" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/318451/pexels-photo-318451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
    title : "Tajweed" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
    title : "Qira'at" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/115144/pexels-photo-115144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
    title : "Tafseer" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/7249183/pexels-photo-7249183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
    title : "Translation" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/8164749/pexels-photo-8164749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
    title : "Memorization" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/7427851/pexels-photo-7427851.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
    title : "Arabic Grammer" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/7249738/pexels-photo-7249738.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
    title : "Arabic Language" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/2895295/pexels-photo-2895295.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
    title : "Reading Arabic" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/590491/pexels-photo-590491.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
    title : "Islamic studies" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

},
{
    title : "Islamic supplications" ,
    paragraph :"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe" ,
    img_source : "https://images.pexels.com/photos/2989625/pexels-photo-2989625.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

}

  ]
  return (
    	<>
  
     <div className="container card_container mt-5" >
     <div className="row">
            <div className="col text-center mb-5 bg text-white p-3 container_child">
              <h1 className="display-4">Courses we Offer</h1>
              <p className="lead">
                Lorem ipsum dolor sit amet at enim hac integer volutpat maecenas
                pulvinar.{" "}
              </p>
            </div>
          </div>
          <motion.div className="container" data-aos="fade-up"
       initial={{opacity:0 , y:120}}
       whileInView={{opacity:1 , y:0}}
       transition={{duration:1 , delay:0.3}}
     >
     <div className="row">
        {card_data.map((item, index) => (
         <Card title={item.title} paragraph={item.paragraph}  img_source={item.img_source}/> 
        ))}
        </div>
    {/*    <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/36704/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">Nazra</h5>
                    <p className="card-text text-black">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, praesentium..</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
        </div>

        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/318451/pexels-photo-318451.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">Tajweed</h5>
                    <p className="card-text text-black">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi, saepe?</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
       
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title  fw-bold color">Qira'at</h5>
                    <p className="card-text text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis, dolore.</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">Tafseer</h5>
                    <p className="card-text text-black">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo, non.</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">Translation</h5>
                    <p className="card-text text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores omnis eaque sed minus veritatis libero cupiditate? Laboriosam facere, earum nisi quae quas quos obcaecati harum, perferendis consectetur ipsam, assumenda enim.</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">Memorization</h5>
                    <p className="card-text text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores omnis eaque sed minus veritatis libero cupiditate? Laboriosam facere, earum nisi quae quas quos obcaecati harum, perferendis consectetur ipsam, assumenda enim.</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">Arabic Grammer</h5>
                    <p className="card-text text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores omnis eaque sed minus veritatis libero cupiditate? Laboriosam facere, earum nisi quae quas quos obcaecati harum, perferendis consectetur ipsam, assumenda enim.</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">Arabic Language</h5>
                    <p className="card-text text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores omnis eaque sed minus veritatis libero cupiditate? Laboriosam facere, earum nisi quae quas quos obcaecati harum, perferendis consectetur ipsam, assumenda enim.</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">Reading Arabic</h5>
                    <p className="card-text text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores omnis eaque sed minus veritatis libero cupiditate? Laboriosam facere, earum nisi quae quas quos obcaecati harum, perferendis consectetur ipsam, assumenda enim.</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">Islamic Studies</h5>
                    <p className="card-text text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores omnis eaque sed minus veritatis libero cupiditate? Laboriosam facere, earum nisi quae quas quos obcaecati harum, perferendis consectetur ipsam, assumenda enim.</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
        </div>
        <div className="col-md-4 mb-4">
            <div className="card">
                <img src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="card-img-top" alt="logo"/>
                <div className="card-body">
                    <h5 className="card-title color fw-bold">Islamic Supplications</h5>
                    <p className="card-text text-black">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores omnis eaque sed minus veritatis libero cupiditate? Laboriosam facere, earum nisi quae quas quos obcaecati harum, perferendis consectetur ipsam, assumenda enim.</p>
                    <a href="/" className="btn btn-primary card_btn">Learn More</a>
                </div>
            </div>
        </div>
        </div> */}
</motion.div>
        
    </div>
	</>
          
  );
}

export default Highlights;
