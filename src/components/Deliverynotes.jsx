import React from 'react'





export const Deliverynotes = (props) => {
  return (
    <div>
        <div>
            <a href="/home">
                <i className='bi bi-house-door'></i>
            </a>
        </div>

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light card_10">
                <div class="container-fluid">
                    {/* <a href="#" class="navbar-brand">Brand</a> */}
                    <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div class="navbar-nav">
                            <a href="" class="nav-item nav-link active" data-bs-toggle="modal" data-bs-target="#example">Create Transporter</a>
                            {/* <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example2">Create Delivery Note</a> */}
                            {/* <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example3">Bale Receiving</a> */}
                            <a href="" class="nav-item nav-link" data-bs-toggle="modal" data-bs-target="#example4"></a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>

        <br />
        <br />

        <div className='card_10'>
        
            <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item" role="presentation">
                    <a class="nav-link active" id="icon-tab-0" data-bs-toggle="tab" href="#icon-tabpanel-0" role="tab" aria-controls="icon-tabpanel-0" aria-selected="true"><i class="fa-solid fa-plane-up"></i> Transporters Delivery Note</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="icon-tab-1" data-bs-toggle="tab" href="#icon-tabpanel-1" role="tab" aria-controls="icon-tabpanel-1" aria-selected="false"><i class="fa-solid fa-suitcase"></i> Grower Delivery Notes</a>
                </li>
                <li class="nav-item" role="presentation">
                    <a class="nav-link" id="icon-tab-2" data-bs-toggle="tab" href="#icon-tabpanel-2" role="tab" aria-controls="icon-tabpanel-2" aria-selected="false"><i class="fa-solid fa-star"></i> </a>
                </li>
            </ul>
            <div class="tab-content pt-5" id="tab-content">
                <div class="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">
                    <div className='table table-responsive'>
                        <table className='table table-striped table-hover'>
                            <thead>
                                <th>TDN #</th>
                                <th>Delivery By</th>
                                <th>ID</th>
                                <th>Vehicle Reg</th>
                                <th>Growers</th>
                                <th>Bales</th>
                                <th>Season</th>
                                <th>Date</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>TDN0001</td>
                                    <td>TMADUURO</td>
                                    <td>66-08435504</td>
                                    <td>AED4586</td>
                                    <td>5</td>
                                    <td>50</td>
                                    <td>2024</td>
                                    <td>15-05-2024</td>
                                    <td>Open</td>
                                </tr>
                                <tr>
                                    <td>TDN0001</td>
                                    <td>TMADUURO</td>
                                    <td>66-08435504</td>
                                    <td>AED4586</td>
                                    <td>5</td>
                                    <td>50</td>
                                    <td>2024</td>
                                    <td>15-05-2024</td>
                                    <td>Open</td>
                                </tr>
                                <tr>
                                    <td>TDN0001</td>
                                    <td>TMADUURO</td>
                                    <td>66-08435504</td>
                                    <td>AED4586</td>
                                    <td>5</td>
                                    <td>50</td>
                                    <td>2024</td>
                                    <td>15-05-2024</td>
                                    <td>Open</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                    
                </div>
                <div class="tab-pane" id="icon-tabpanel-1" role="tabpanel" aria-labelledby="icon-tab-1">
                <div class="tab-pane active" id="icon-tabpanel-0" role="tabpanel" aria-labelledby="icon-tab-0">
                    <div className='table table-responsive'>
                        <table className='table table-striped table-hover'>
                            <thead>
                                <th>GDN #</th>
                                <th>Grower</th>
                                <th>Name</th>
                                <th>Sale Date</th>
                                <th>Selling Point</th>
                                <th>Floor</th>
                                <th>Season</th>
                                <th>Row</th>
                                <th>Bales Delivered</th>
                                <th>Bales Received</th>
                                <th>Date Created</th>
                                <th>Status</th>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>GDN0001</td>
                                    <td>V124536</td>
                                    <td>Tinashe Kaponda</td>
                                    <td>15-05-2024</td>
                                    <td>Vision Leaf Tobacco</td>
                                    <td>A</td>
                                    <td>2024</td>
                                    <td>15</td>
                                    <td>30</td>
                                    <td>30</td>
                                    <td>15-05-2024</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td>GDN0001</td>
                                    <td>V124536</td>
                                    <td>Tinashe Kaponda</td>
                                    <td>15-05-2024</td>
                                    <td>Vision Leaf Tobacco</td>
                                    <td>A</td>
                                    <td>2024</td>
                                    <td>15</td>
                                    <td>30</td>
                                    <td>30</td>
                                    <td>15-05-2024</td>
                                    <td>Closed</td>
                                </tr>
                                <tr>
                                    <td>GDN0001</td>
                                    <td>V124536</td>
                                    <td>Tinashe Kaponda</td>
                                    <td>15-05-2024</td>
                                    <td>Vision Leaf Tobacco</td>
                                    <td>A</td>
                                    <td>2024</td>
                                    <td>15</td>
                                    <td>30</td>
                                    <td>30</td>
                                    <td>15-05-2024</td>
                                    <td>Closed</td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                
                </div>
                <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Laying</div>
                <div class="tab-pane" id="icon-tabpanel-2" role="tabpanel" aria-labelledby="icon-tab-2">Booking</div>
            </div>
       
        </div>

{/* Modals */}

        <div className="modal fade" id="example" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Name</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body form-group row">
                            <form>
                                <div className='row'>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Name</label>
                                        <input type="name" class="form-control" id="sale_date" />
                                    </div>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">ID</label>
                                        <input type="name" class="form-control" id="" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Vehicle Reg</label>
                                        <input type="name" class="form-control" id="" />
                                    </div>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Contact</label>
                                        <input type="phone" class="form-control" id="" />
                                    </div>
                                </div>
                                <div className='row'>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Location</label>
                                        <input type="name" class="form-control" id="sale_date" />
                                    </div>
                                    <div class="col">
                                        <label for="recipient-name" class="col-form-label">Date</label>
                                        <input type="date" class="form-control" id="sale_date" />
                                    </div>
                                </div>
                                
                                </form>

                            </div>
                            <br />

                            <button className='btn btn-success'>Save</button>

                            <br />

                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <a href="" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#example2"
                                type="button">Insert Growers</a>
                            </div>

                        </div>

                        

                    </div>
                </div>
            
         

            <div className="modal fade" id="example2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-lg">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Grower Delivery Notes</h5>
                            
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <br />

                        <div className='row'>
                            <div className='col'>
                                <h6>TDN0001011</h6>
                            </div>
                            <div className='col'>
                                 
                                <button type="button" class="btn btn-danger">TDN00021546</button>
                            </div> 
                            <div className='col'>
                                <h6></h6>
                            </div>
                        </div>
                        
                        <div class="modal-body form-group row">
                            <form>
                            <div className='row'>
                            <div class="col">
                                <label for="recipient-name" class="col-form-label">Grower</label>
                                <input type="text" class="form-control" id="sale_date" />
                            </div>
                            <div class="col">
                                <label for="recipient-name" class="col-form-label">Bales</label>
                                <input type="number" class="form-control" id="sale_date" />
                            </div>

                            {/* <div class="col">
                                <label for="recipient-name" class="col-form-label">Contact</label>
                                <input type="name" class="form-control" id="sale_date" />
                            </div> */}

                            </div>
                            <br />

                            <button className='btn btn-success'>Save</button>


                            </form>
                        </div>
{/* Echo a table showing the growers that have been place in the tdn */}
                        <div className='card_10 table-responsive'>
                            <table className='table table-striped'>
                                <thead>
                                    <th>Grower</th>
                                    <th>Name</th>
                                    <th>Location</th>
                                    <th>Date</th>
                                    <th>GDN Number</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>V124536</td>
                                        <td>Tinashe Mabhaudi</td>
                                        <td>A</td>
                                        <td>15-05-2024</td>
                                        <td>GDN0001</td>
                                        <td><a href="" className='bi bi-trash'> Delete</a></td>
                                    </tr>
                                    <tr>
                                        <td>V124536</td>
                                        <td>Tinashe Mabhaudi</td>
                                        <td>A</td>
                                        <td>15-05-2024</td>
                                        <td>GDN0001</td>
                                        <td><a href="" className='bi bi-trash'> Delete</a></td>
                                    </tr>
                                    <tr>
                                        <td>V124536</td>
                                        <td>Tinashe Mabhaudi</td>
                                        <td>A</td>
                                        <td>15-05-2024</td>
                                        <td>GDN0001</td>
                                        <td><a href="" className='bi bi-trash'> Delete</a></td>
                                    </tr>
                                    <tr>
                                        <td>V124536</td>
                                        <td>Tinashe Mabhaudi</td>
                                        <td>A</td>
                                        <td>15-05-2024</td>
                                        <td>GDN0001</td>
                                        <td><a href="" className='bi bi-trash'> Delete</a></td>
                                    </tr>
                                </tbody>

                            </table>


                        </div>

                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button class="btn btn-primary" type="button">Complete Delivery</button>
                        </div>
                        </div>
                    </div>
            </div>

    </div>
  )
}

