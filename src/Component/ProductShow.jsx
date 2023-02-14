import React, { useEffect } from 'react'
import './productshow.css'
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { TitleChange } from './Titlechange/TitleChange';

export const ProductShow = () => {
    
    const [oneData, setOneData] = useState([]);
    const uid = useParams();
    const SINGLEDATAAPI = `http://www.socus.co.in/socus_admin/api/get_product_detail?model_no=${uid.modalN}`;
    TitleChange(`Socus Product Modal Number ${uid.modalN}`)

    // console.log(uid.modalN)


    // console.log(oneData)

    const singleData = async (url) => {
        const res = await axios.get(url);
        // console.log(res.data.data.categories_info)
        // const singleProduct = res.data.message
        // if(res.data.message === 'Request failed with status code 500'){
        //     alert(' MODAL NUMBER NOT FOUND')
            
        // }
        // // console.log(singleProduct)
        // else{
            const singleProduct = res.data.data.categories_info;
            setOneData(singleProduct)
           
        // }

        
        
    }

    useEffect(() => {
        singleData(SINGLEDATAAPI)
    }, []);


    return (
        <div className="sector pt-5">
            {oneData.map((item, index) => {
                // console.log(item)
                return (
                    <div key={index}>
                        <div className="container pt-5">
                            <div className="row" style={{height:"auto"}}>
                                <div className="col-md-6 text-center " >
                                            
                                    <Carousel className="m-auto">
                                        <Carousel.Item>
                                            <img
                                                className=""
                                                src={item.product_image}
                                                alt="First slide"
                                                style={{ width:"50%",height:'50%' }}
                                            />
                                            <Carousel.Caption>
                                            </Carousel.Caption>
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                                <div className="col-md-6">
                                    <div
                                        className="product-description-container"
                                        data-product-description-path="/content/hikvision/en/products/IP-Products/Network-Cameras/Pro-Series-EasyIP-/ds-2cd2386g2-i-u-/jcr:content/root/responsivegrid/product-description"
                                    >
                                        {/* {oneData.description} */}
                                        <div
                                            className="product_description-wrapper eols-wrapper"
                                            data-product-name="DS-2CD2386G2-I(U)"
                                            data-product-number="M000008199"
                                            data-product-page="/content/hikvision/en/products/IP-Products/Network-Cameras/Pro-Series-EasyIP-/ds-2cd2386g2-i-u-"
                                        >
                                            <h1 className="prod_name">
                                                    {item.product_name}
                                            </h1>
                                            <div className='text-justify' dangerouslySetInnerHTML={{__html: item.description}}/>
                                            <ul className="product_description_Thumbnail-list">
                                                {item.icon_images.map((item, index) => {
                                                    return (
                                                        <li className="prodcuct_description_item">
                                                            <div className="product_description_circle">
                                                                <img className='' src={item.icon_image} />
                                                            </div>
                                                            <p className='' style={{ fontSize: 10, width: 10, color: "green" }}>{item.icon_name}</p>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                            <br />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* First Div End */}
                        {/* Second Div Start */}
                        <div className="product-specification aem-GridColumn aem-GridColumn--default--12">
                            <div className="tech-specs-accordion-wrapper">
                                <div className="tech-specs-accordion-desktop-wrap">
                                    <div className="tech-specs-accordion__header">
                                        <div className="tech-specs-accordion__header--heading">
                                            <h2>Specification</h2>
                                        </div>
                                    </div>
                                    {item.features.map((item, index) => {
                                        return (


                                            <div className="tech-specs-items-wrap" key={index}>
                                                <div className="tech-specs-items-title-wrap">
                                                    <ul className="tech-specs-items-title">
                                                        <li className="tech-specs-items-title__name active">
                                                            {" "}
                                                            <a
                                                                className="tech-specs-items-title__link "
                                                                to="#Camera"
                                                                data-target="Camera "
                                                            >
                                                                <h3 className="h3-seo">{item.feature_name} </h3>
                                                            </a>
                                                        </li>

                                                    </ul>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description" data-target="Camera ">
                                                        <li className="tech-specs-items-description-list">
                                                            <span
                                                                className="tech-specs-items-description__title--heading"
                                                                id="Camera"
                                                            >
                                                                {item.feature_name}
                                                            </span>
                                                        </li>
                                                        {item.feature_details.map((item, index) => {
                                                            return (<li className="tech-specs-items-description-list">
                                                                <span className="tech-specs-items-description__title">
                                                                    {item.heading_name}
                                                                </span>
                                                                <span className="tech-specs-items-description__title-details">
                                                                    {item.details}
                                                                </span>
                                                            </li>
                                                            )
                                                        })}
                                                        </ul>
                                                       
                                                       
                                                </div>
                                            </div>
                                        )
                                    })}
                                    <div className="tech-specs-accordion__footer">
                                        <div className="tech-specs-accordion__footer--content">
                                            *Product performance is based on testing in a controlled
                                            environment. Your results may vary due to several external and
                                            environmental factors.
                                        </div>
                                    </div>
                                </div>
                                <div className="tech-specs-accordion-tab-mobile-view-wrap">
                                    <div className="tech-specs-accordion__header">
                                        <div className="tech-specs-accordion__header--heading">
                                            <h2>Specification</h2>
                                        </div>
                                    </div>
                                    <div
                                        className="carousel slide carousel-fade"
                                        id="carouselExampleFade"
                                        data-ride="carousel"
                                        data-interval="false"
                                    >
                                        <div className="carousel-inner">
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">Camera </h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Image Sensor
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                1/1.8" Progressive Scan CMOS
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Max. Resolution
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                3840 × 2160
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Min. Illumination
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Color: 0.003 Lux @ (F1.6, AGC ON), B/W: 0 Lux with IR
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Shutter Time
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                1/3 s to 1/100,000 s
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Day &amp; Night
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                IR cut filter
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Angle Adjustment
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Pan: 0° to 360°, tilt: 0° to 75°, rotate: 0° to 360°
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo" id="Lens">
                                                            Lens
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Lens Type
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Fixed focal lens, 2.8, 4, and 6 mm optional
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Focal Length &amp; FOV
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                2.8 mm, horizontal FOV 111°, vertical FOV 59°, diagonal
                                                                FOV 131° 4 mm, horizontal FOV 87°, vertical FOV 47°,
                                                                diagonal FOV 102° 6 mm, horizontal FOV 51°, vertical FOV
                                                                28°, diagonal FOV 60°
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Lens Mount
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                M12
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Iris Type
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Fixed
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Aperture
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                F1.6
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo" id="DORI">
                                                            DORI
                                                        </h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                DORI
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                2.8 mm: D: 89.2 m, O: 35.4 m, R: 17.8 m, I: 8.9 m 4 mm: D:
                                                                99.4 m, O: 39.4 m, R: 19.9 m, I: 9.9 m 6 mm: D: 140.0 m,
                                                                O: 55.6 m, R: 28.0 m, I: 14.0 m
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">Illuminator</h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Supplement Light Type
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                IR
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Supplement Light Range
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Up to 30 m
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Smart Supplement Light
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Yes
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                IR Wavelength
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                850 nm
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">Video</h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Main Stream
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                50 Hz: 25 fps (3840 × 2160, 3200 × 1800, 2688 × 1520, 1920
                                                                × 1080, 1280 × 720) 60 Hz: 24 fps (3840 × 2160) 30 fps
                                                                (3200 × 1800, 2688 × 1520, 1920 × 1080, 1280 × 720)
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Sub-Stream
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                50 Hz: 25 fps (640 × 480, 640 × 360) 60 Hz: 30 fps (640 ×
                                                                480, 640 × 360)
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Third Stream
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                50 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480, 640 ×
                                                                360) 60 Hz: 10 fps (1920 × 1080, 1280 × 720, 640 × 480,
                                                                640 × 360) *Third stream is supported under certain
                                                                settings.
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Video Compression{" "}
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Main stream: H.265/H.264/H.264+/H.265+ Sub-stream:
                                                                H.265/H.264/MJPEG Third stream: H.265/H.264 *Third stream
                                                                is supported under certain settings.
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Video Bit Rate
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                32 Kbps to 16 Mbps
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                H.264 Type
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Baseline Profile/Main Profile/High Profile
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                H.265 Type
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Main Profile
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Bit Rate Control
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                CBR/VBR
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Scalable Video Coding (SVC)
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                H.264 and H.265 encoding
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Region of Interest (ROI)
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                1 fixed region for main stream and sub-stream
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Target Cropping
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Yes
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">Audio</h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Audio Type
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                -U: mono sound
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Audio Compression{" "}
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                -U: G.711ulaw/G.711alaw/G.722.1/G.726/MP2L2/PCM/MP3/AAC
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Audio Bit Rate
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                -U: 64 Kbps (G.711ulaw/G.711alaw)/16 Kbps (G.722.1)/16
                                                                Kbps (G.726)/32 to 192 Kbps (MP2L2)/8 to 320 Kbps (MP3)/16
                                                                to 64 Kbps (AAC)
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Audio Sampling Rate
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                -U: 8 kHz/16 kHz/32 kHz/44.1 kHz/48 kHz
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Environment Noise Filtering
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                -U: Yes
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">Network</h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Protocols
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                TCP/IP, ICMP, HTTP, HTTPS, FTP, DHCP, DNS, DDNS, RTP,
                                                                RTSP, NTP, UPnP, SMTP, IGMP, 802.1X, QoS, IPv4, IPv6, UDP,
                                                                Bonjour, SSL/TLS, PPPoE, SNMP, ARP
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Simultaneous Live View
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Up to 6 channels
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                API
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Open Network Video Interface (PROFILE S, PROFILE G,
                                                                PROFILE T), ISAPI, SDK
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                User/Host
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Up to 32 users. 3 user levels: administrator, operator and
                                                                user
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Security
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Password protection, complicated password, HTTPS
                                                                encryption, IP address filter, Security Audit Log, basic
                                                                and digest authentication for HTTP/HTTPS, TLS 1.1/1.2,
                                                                WSSE and digest authentication for Open Network Video
                                                                Interface
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Network Storage
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                MicroSD/SDHC/SDXC card (256 GB) local storage, and NAS
                                                                (NFS, SMB/CIFS), auto network replenishment (ANR) Together
                                                                with high-end Hikvision memory card, memory card
                                                                encryption and health detection are supported.
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Client
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                iVMS-4200, Hik-Connect, Hik-Central
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Web Browser
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Plug-in required live view: IE 10+ Plug-in free live view:
                                                                Chrome 57.0+, Firefox 52.0+ Local service: Chrome 57.0+,
                                                                Firefox 52.0+
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">Image</h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Image Parameters Switch
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Yes
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Image Settings
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Rotate mode, saturation, brightness, contrast, sharpness,
                                                                gain, white balance adjustable by client software or web
                                                                browser
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Day/Night Switch
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Day, Night, Auto, Schedule
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Wide Dynamic Range (WDR)
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                120 dB
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                SNR
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                ≥ 52 dB
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Image Enhancement
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                BLC, HLC, 3D DNR
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">Interface</h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Ethernet Interface
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                1 RJ45 10 M/100 M self-adaptive Ethernet port
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                On-Board Storage
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Built-in micro SD/SDHC/SDXC slot, up to 256 GB
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Built-in Microphone
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                -U: Yes
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Reset Key
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Yes
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">Event</h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Basic Event
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Motion detection (human and vehicle targets
                                                                classification), video tampering alarm, exception
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Smart Event
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Scene change detection
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Linkage
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Upload to FTP/NAS/memory card, notify surveillance center,
                                                                send email, trigger recording, trigger capture
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">Deep Learning Function</h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Face Capture
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Yes
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">General</h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Power
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                12 VDC ± 25%, 0.48 A, max. 5.8 W, Ø5.5 mm coaxial power
                                                                plug, reverse polarity protection PoE: 802.3af, Class 3,
                                                                36 V to 57 V, 0.19 A to 0.12 A, max. 6.8 W
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Dimension
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Ø138.3 mm × 126.3 mm (Ø5.4" × 5")
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Package Dimension
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                170 mm × 170 mm × 150 mm (6.9" × 6.9" × 5.9")
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title" />
                                                            <span className="tech-specs-items-description__title-details">
                                                                Approx. 740 g (1.6 lb.)
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                With Package Weight
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Approx. 1020 g (2.2 lb.)
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Storage Conditions
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                -30 °C to 60 °C (-22 °F to 140 °F). Humidity 95% or less
                                                                (non-condensing)
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Startup and Operating Conditions
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                -30 °C to 60 °C (-22 °F to 140 °F), humidity 95% or less
                                                                (non-condensing)
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Language
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                33 languages English, Russian, Estonian, Bulgarian,
                                                                Hungarian, Greek, German, Italian, Czech, Slovak, French,
                                                                Polish, Dutch, Portuguese, Spanish, Romanian, Danish,
                                                                Swedish, Norwegian, Finnish, Croatian, Slovenian, Serbian,
                                                                Turkish, Korean, Traditional Chinese, Thai, Vietnamese,
                                                                Japanese, Latvian, Lithuanian, Portuguese (Brazil),
                                                                Ukrainian
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                General Function
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                Anti-flicker, heartbeat, mirror, privacy mask, flash log,
                                                                password reset via email, pixel counter
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="tech-specs-items-container">
                                                <div className="tech-specs-items-title">
                                                    <div className="tech-specs-items-title__name">
                                                        <h3 className="h3-seo">Approval</h3>
                                                    </div>
                                                </div>
                                                <div className="tech-specs-items-description-wrap">
                                                    <ul className="tech-specs-items-description">
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                EMC
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                FCC (47 CFR Part 15, Subpart B); CE-EMC (EN 55032: 2015,
                                                                EN 61000-3-2: 2014, EN 61000-3-3: 2013, EN 50130-4: 2011
                                                                +A1: 2014); RCM (AS/NZS CISPR 32: 2015); KC (KN 32: 2015,
                                                                KN 35: 2015)
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Safety
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                UL (UL 60950-1); CB (IEC 60950-1:2005 + Am 1:2009 + Am
                                                                2:2013); CE-LVD (EN 60950-1:2005 + Am 1:2009 + Am 2:2013)
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Environment
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                CE-RoHS (2011/65/EU); WEEE (2012/19/EU); Reach (Regulation
                                                                (EC) No 1907/2006)
                                                            </span>
                                                        </li>
                                                        <li className="tech-specs-items-description-list">
                                                            <span className="tech-specs-items-description__title">
                                                                Protection
                                                            </span>
                                                            <span className="tech-specs-items-description__title-details">
                                                                IP67 (IEC 60529-2013)
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <a
                                            className="carousel-control-prev"
                                            to="#carouselExampleFade"
                                            role="button"
                                            data-slide="prev"
                                        >
                                            <div className="left-arrow" />
                                        </a>
                                        <a
                                            className="carousel-control-next"
                                            to="#carouselExampleFade"
                                            role="button"
                                            data-slide="next"
                                        >
                                            <div className="right-arrow" />
                                        </a>
                                    </div>
                                    <div className="tech-specs-accordion__footer">
                                        <div className="tech-specs-accordion__footer--content">
                                            *Product performance is based on testing in a controlled
                                            environment. Your results may vary due to several external and
                                            environmental factors.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )
            })}
            {/* Second Div End */}
            {/* Thrid Div Start */}
            <div className="down-center container pb-4">
                <div className="document-download aem-GridColumn aem-GridColumn--default--12">
                    <div className="text-grid-container">
                        <div
                            className="product-spotlight-header-wrapper "
                            data-anchortext="undefined"
                            data-to=""
                        >
                            <div className="title-wrapper">
                                <div className="title title-2 ">
                                    <h2>Download Center</h2>
     
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="row">
                            <div className="text-link  doc-container">
                                <div className="category category-container">
                                    <div className="category-wrapper doc-download-category-wrapper">
                                        <div className="category-content doc-download-category-content col-md-4">
                                            <div
                                                className="text-grid-wrapper-check"
                                                id="Data_Sheet"
                                                data-maincategory="Data Sheet"
                                                data-page-path="/content/hikvision/en/products/IP-Products/Network-Cameras/Pro-Series-EasyIP-/ds-2cd2386g2-i-u-"
                                            >
                                                <div className="icon-right-arrow">
                                                    <a
                                                        className="card-space products__links text-grid-form hiknow-link at-download download-form"
                                                        to="#"
                                                        target="_blank"
                                                        data-at-module="text grid::Data Sheet"
                                                    >
                                                        <div className="new-card doc-download-new-card only-one">
                                                            {/*<img class="mobile-slider doc-download-mobile-slider" src="/content/dam/hikvision/en/icons-of-document-types/document-download-icon_Datasheet.png" alt="Data Sheet">*/}
                                                            <div
                                                                data-original="/content/dam/hikvision/en/icons-of-document-types/document-download-icon_Datasheet.png"
                                                                className="doc-download-mobile-slider scroll-lazy-image"
                                                                style={{
                                                                    backgroundImage:
                                                                        "url(https://www.pramaindia.in/wp-content/uploads/2020/12/offer-3.png)"
                                                                }}
                                                            ></div>
                                                            <div className="new-card-content doc-download-content">
                                                                <div className="content-title doc-download-title">
                                                                    <h3 className="h3-seo">Perception</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="text-grid-form-modal-wrapper">
                                                    <div className="text-grid-form-modal-bg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="category-content doc-download-category-content col-md-4">
                                            <div
                                                className="text-grid-wrapper-check"
                                                id="Quick_Start_Guide"
                                                data-maincategory="Quick Start Guide"
                                                data-page-path="/content/hikvision/en/products/IP-Products/Network-Cameras/Pro-Series-EasyIP-/ds-2cd2386g2-i-u-"
                                            >
                                                <div className="icon-right-arrow">
                                                    <a
                                                        className="card-space products__links text-grid-form hiknow-link at-download download-form"
                                                        to="#"
                                                        data-analytics="Quick Start Guide::document download::下载::[file-link]/content/dam/hikvision/products/S000000001/S000000002/S000000003/S000000025/OFR000041/M000008199/Quick_Start_Guide/UD21665B-F_Baseline_1-3-Series-Multilingual-Quick-Start-Guide_20220804.pdf::DS-2CD2386G2-I(U)"
                                                        target="_blank"
                                                        data-at-module="text grid::Quick Start Guide"
                                                    >
                                                        <div className="new-card doc-download-new-card only-one">
                                                            {/*<img class="mobile-slider doc-download-mobile-slider" src="/content/dam/hikvision/en/icons-of-document-types/document-download-icon_Quick-start-guide.png" alt="Quick Start Guide">*/}
                                                            <div
                                                                data-original="/content/dam/hikvision/en/icons-of-document-types/document-download-icon_Quick-start-guide.png"
                                                                className="doc-download-mobile-slider scroll-lazy-image"
                                                                style={{
                                                                    backgroundImage:
                                                                        "url(https://www.pramaindia.in/wp-content/uploads/2020/12/offer-4.png)"
                                                                }}
                                                            ></div>
                                                            <div className="new-card-content doc-download-content">
                                                                <div className="content-title doc-download-title">
                                                                    <h3 className="h3-seo">Transmission</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="text-grid-form-modal-wrapper">
                                                    <div className="text-grid-form-modal-bg" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="category-content doc-download-category-content col-md-4">
                                            <div
                                                className="text-grid-wrapper-check"
                                                id="User_Manual"
                                                data-maincategory="User Manual"
                                                data-page-path="/content/hikvision/en/products/IP-Products/Network-Cameras/Pro-Series-EasyIP-/ds-2cd2386g2-i-u-"
                                            >
                                                <div className="icon-right-arrow">
                                                    <a
                                                        className="card-space products__links text-grid-form hiknow-link at-download download-form"
                                                        to="#"
                                                        data-analytics="User Manual::document download::下载::[file-link]/content/dam/hikvision/products/S000000001/S000000002/S000000003/S000000025/OFR000041/M000008199/User_Manual/UD28967B-A_Network-Camera_User-Manual_5.7.20_20221215.PDF::DS-2CD2386G2-I(U)"
                                                        target="_blank"
                                                        data-at-module="text grid::User Manual"
                                                    >
                                                        <div className="new-card doc-download-new-card only-one">
                                                            {/*<img class="mobile-slider doc-download-mobile-slider" src="/content/dam/hikvision/en/icons-of-document-types/document-download-icon_User-manual.png" alt="User Manual">*/}
                                                            <div
                                                                data-original="/content/dam/hikvision/en/icons-of-document-types/document-download-icon_User-manual.png"
                                                                className="doc-download-mobile-slider scroll-lazy-image"
                                                                style={{
                                                                    backgroundImage:
                                                                        "url(https://www.pramaindia.in/wp-content/uploads/2020/12/offer-3.png)"
                                                                }}
                                                            ></div>
                                                            <div className="new-card-content doc-download-content">
                                                                <div className="content-title doc-download-title">
                                                                    <h3 className="h3-seo">Storage</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="text-grid-form-modal-wrapper">
                                                    <div className="text-grid-form-modal-bg" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="row">
                                <div />
                                <div />
                                <div />
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Thrid Div End */}
            {/* Fourth Div Start */}
            <div className="container">
                <div className="firmware-download aem-GridColumn aem-GridColumn--default--12">
                    <div className="firmware-download-comp">
                        <div className="firmware-container">
                            <div className="firmware scroll">Firmware</div>
                            <div className="section-container">
                                <div className="section firmware-download">
                                    <div className="download-container">
                                        <a
                                            className="firmware-series at-download scroll"
                                            data-title="Firmware_V5.7.12_221201"
                                            to="#"
                                            data-toggle="modal"
                                            data-link="https://assets.hikvision.com/prd/public/all/files/202212/Firmware__V5.7.12_221201_S3000469477.zip"
                                        >
                                            <div
                                                className="at-download"
                                                data-link="https://assets.hikvision.com/prd/public/all/files/202212/Firmware__V5.7.12_221201_S3000469477.zip"
                                            >
                                                Firmware_V5.7.12_221201
                                            </div>
                                        </a>
                                    </div>
                                    <div className="download-container">
                                        <a
                                            className="firmware-series at-download scroll"
                                            to="#"
                                            target="_blank"
                                            data-title="Network Camera-V5.7.12 Release Note-G5.pdf"
                                            data-link="https://hiknow-soft-bucket.s3.ap-southeast-1.amazonaws.com/prd/public/all/files/202212/Network%20Camera-V5.7.12%20Release%20Note-G5.pdf"
                                        >
                                            <div
                                                className="at-download"
                                                data-link="https://hiknow-soft-bucket.s3.ap-southeast-1.amazonaws.com/prd/public/all/files/202212/Network%20Camera-V5.7.12%20Release%20Note-G5.pdf"
                                            >
                                                Network Camera-V5.7.12 Release Note-G5.pdf
                                            </div>
                                        </a>
                                    </div>
                                    <div className="apply">
                                        <div className="apply-to">Applied to:</div>
                                        <div className="apply-list">
                                            <div className="apply-item">DS-2CD2386G2-I(2.8mm)(C)</div>
                                            <div className="apply-item">DS-2CD2386G2-I(4mm)(C)</div>
                                            <div className="apply-item">DS-2CD2386G2-I(6mm)(C)</div>
                                            <div className="apply-item">DS-2CD2386G2-IU(2.8mm)(C)</div>
                                            <div className="apply-item">DS-2CD2386G2-IU(4mm)(C)</div>
                                            <br />
                                            <div className="apply-item">DS-2CD2386G2-IU(6mm)(C)</div>
                                            <div className="apply-item">
                                                DS-2CD2386G2-IU(2.8mm)(C)(BLACK)
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="firmware-tip-container">
                            <img
                                className="firmware-tip-icon"
                                src="https://www.hikvision.com/etc/clientlibs/it/resources/icons/firmware-info-icon.svg"
                                alt=""
                            />
                            <span className="firmware-tip-text">
                                For better user experience, we highly recommend you to update your
                                device to the latest firmware asap.
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Download Center Div End */}
            {/* Related Accessories Div Start */}
            <div className="Accessories-contain">
                <div className="product-spotlight-heade">
                    <h2>Related Accessories</h2>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <div className="Accessories-box">
                            <a to="#">
                                <div
                                    className="related-accessories-img laz"
                                    data-original="/content/dam/hikvision/products/S000000001/S000000139/S000000140/S000000149/OFR000228/M000001974/images/DS-1271ZJ-140-.png.thumb.140.100.png"
                                >
                                    <img src="https://www.pramaindia.in/wp-content/uploads/2020/12/sol-7.png" />
                                </div>
                            </a>
                            <div className="related-accessories-content NR">
                                <div className="related-accessories-title">
                                    <h3 className="h3-seo NR">PT-NR2A08-Q2CKV</h3>
                                </div>
                                <div className="related-accessories-desc NR">
                                    <h4 className="h4-seo">Vertical pole mount</h4>
                                </div>
                                <div className="add-to-compare">
                                    <input className="add-to-compare-chk" type="checkbox" name="" />
                                    <label>add to compare</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Accessories-box">
                            <a to="#">
                                <div
                                    className="related-accessories-img laz"
                                    data-original="/content/dam/hikvision/products/S000000001/S000000139/S000000140/S000000149/OFR000228/M000001974/images/DS-1271ZJ-140-.png.thumb.140.100.png"
                                >
                                    <img src="https://www.pramaindia.in/wp-content/uploads/2020/12/sol-7.png" />
                                </div>
                            </a>
                            <div className="related-accessories-content NR">
                                <div className="related-accessories-title">
                                    <h3 className="h3-seo NR">PT-NR2A08-Q2CKV</h3>
                                </div>
                                <div className="related-accessories-desc NR">
                                    <h4 className="h4-seo">Vertical pole mount</h4>
                                </div>
                                <div className="add-to-compare">
                                    <input className="add-to-compare-chk" type="checkbox" name="" />
                                    <label>add to compare</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="Accessories-box">
                            <a to="#">
                                <div
                                    className="related-accessories-img laz"
                                    data-original="/content/dam/hikvision/products/S000000001/S000000139/S000000140/S000000149/OFR000228/M000001974/images/DS-1271ZJ-140-.png.thumb.140.100.png"
                                >
                                    <img src="https://www.pramaindia.in/wp-content/uploads/2020/12/sol-7.png" />
                                </div>
                            </a>
                            <div className="related-accessories-content NR">
                                <div className="related-accessories-title">
                                    <h3 className="h3-seo NR">PT-NR2A08-Q2CKV</h3>
                                </div>
                                <div className="related-accessories-desc NR">
                                    <h4 className="h4-seo">Vertical pole mount</h4>
                                </div>
                                <div className="add-to-compare">
                                    <input className="add-to-compare-chk" type="checkbox" name="" />
                                    <label>add to compare</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Related Accessories Div End */}
        </div>

    )
}
