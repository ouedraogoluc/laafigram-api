import React from 'react'
import logo from '../../../assets/images/logo.png'
const HeaderMenu = () => {
    return (
        <div class="container"><a class="navbar-brand d-flex align-items-center z-index-1" href="index.html"> <img src={logo} alt="laafigram logo" /></a>
        <div class="navbar-nav text-base d-none d-lg-flex">
            <div class="nav-item">
                <div class="media border-right pr-3 mr-3"><span class="fas fa-map-marker-alt fs-2 text-primary" data-fa-transform="down-1.5"></span>
                    <div class="media-body ml-2">
                        <h5 class="fs-0 mb-1">Address</h5>
                        <p class="fs--1 mb-0">Rue13X24,<br />medina dakar, senegal</p>
                    </div>
                </div>
            </div>
            <div class="nav-item">
                <div class="media"><span class="fas fa-headset fs-2 text-primary" data-fa-transform="down-1.5"></span>
                    <div class="media-body ml-2">
                        <h5 class="fs-0 mb-1">Phone Appointment</h5>
                        <ul class="nav flex-column fs--1">
                            <li class="nav-item"><a href="tel:5555551234">(+221) 781137355</a></li>
                            <li class="nav-item"><a href="tel:5555555678">(+221) 763923189</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div><button class="navbar-toggler ml-4 z-index-1" type="button" data-toggle="collapse" data-target="#navbarStandard" aria-controls="navbarStandard" aria-expanded="true" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
    </div>
    )
}

export default HeaderMenu
