import React from 'react'

const HomeMenu = () => {
    return (
        <div class="container">
        <ul class="navbar-nav align-items-center">
            <li class="nav-item dropdown"><a class="btn btn-light btn-sm dropdown-toggle mr-2" id="languageDropdown" href="#!" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><img src="assets/img/illustrations/united-states.svg" width="20" alt="" /></a>
                <div class="dropdown-menu" aria-labelledby="languageDropdown"><a class="dropdown-item font-weight-semi-bold text-primary d-flex justify-content-between" href="#!">
                    <div class="media align-items-center"><img src="assets/img/illustrations/united-states.svg" width="20" alt="" />
                        <div class="media-body ml-2">EN</div>
                    </div><span class="fas fa-check" data-fa-transform="down-4 shrink-4"></span>
                </a><a class="dropdown-item font-weight-semi-bold text-primary" href="#!">
                        <div class="media align-items-center"><img src="assets/img/illustrations/germany.svg" width="20" alt="" />
                            <div class="media-body ml-2">DE</div>
                        </div>
                    </a><a class="dropdown-item font-weight-semi-bold text-primary" href="#!">
                        <div class="media align-items-center"><img src="assets/img/illustrations/saudi-arabia.svg" width="20" alt="" />
                            <div class="media-body ml-2">AR</div>
                        </div>
                    </a></div>
            </li>
            <li class="nav-item">
                <form class="input-iconic">
                    <div class="input-icon"><button type="submit"><span class="fas fa-search text-300"></span></button></div><input class="form-control form-control-sm" type="search" placeholder="Search..." />
                </form>
            </li>
        </ul>
        <ul class="navbar-nav align-items-center">
            <li class="nav-item"><a class="btn btn-outline-danger btn-sm mx-2" href="#!"><span class="d-none d-md-inline">Find a </span>Doctor</a></li>
            <li class="nav-item"><a class="btn btn-primary btn-sm" href="#appointmentModal" data-toggle="modal"><span class="d-none d-md-inline">Request </span>Appointment</a></li>
        </ul>
    </div>
    )
}

export default HomeMenu
