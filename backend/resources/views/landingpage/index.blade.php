<!DOCTYPE html>
<html>
   <head>
      <!-- basic -->
      <meta charset="utf-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <!-- mobile metas -->
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <meta name="viewport" content="initial-scale=1, maximum-scale=1">
      <!-- site metas -->
      <title>Rent Mobil</title>
      <meta name="keywords" content="">
      <meta name="description" content="">
      <meta name="author" content="">
      <!-- bootstrap css -->
      <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
      <!-- style css -->
      <link rel="stylesheet" type="text/css" href="/css/style.css">
      <!-- Responsive-->
      <link rel="stylesheet" href="/css/responsive.css">
      <!-- fevicon -->
      <link rel="icon" href="images/fevicon.png" type="image/gif" />
      <!-- font css -->
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Raleway:wght@400;500;600;700;800&display=swap" rel="stylesheet">
      <!-- Scrollbar Custom CSS -->
      <link rel="stylesheet" href="/css/jquery.mCustomScrollbar.min.css">
      <!-- Tweaks for older IEs-->
      <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css">
   </head>
   <body>
      <!-- header section start -->
      <div class="header_section">
         <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a class="navbar-brand"href="index.html"><img src="images/logo.png"></a>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  
                  <form class="form-inline my-2 my-lg-0">
                  </form>
               </div>
            </nav>
         </div>
      </div>
      <!-- header section end -->
      
      <!-- banner section start --> 
      <div class="banner_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-6">
                  <div id="banner_slider" class="carousel slide" data-ride="carousel">
                     <div class="carousel-inner">
                        <div class="carousel-item active">
                           <div class="banner_taital_main">
                              <h1 class="banner_taital">Car Rent <br><span style="color: #fe5b29;">For You</span></h1>
                           
                              
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="banner_taital_main">
                              <h1 class="banner_taital">Car Rent <br><span style="color: #fe5b29;">For You</span></h1>
                              
                           </div>
                        </div>
                        <div class="carousel-item">
                           <div class="banner_taital_main">
                              <h1 class="banner_taital">Car Rent <br><span style="color: #fe5b29;">For You</span></h1>
                              
                           </div>
                        </div>
                     </div>
                     <a class="carousel-control-prev" href="#banner_slider" role="button" data-slide="prev">
                        <i class="fa fa-angle-left"></i>
                     </a>
                     <a class="carousel-control-next" href="#banner_slider" role="button" data-slide="next">
                        <i class="fa fa-angle-right"></i>
                     </a>
                  </div>
               </div>
               <div class="col-md-6">
                  <div class="banner_img"><img src="images/banner-img.png"></div>
               </div>
            </div>
         </div>
      </div>
      <!-- banner section end -->
      <!-- about section start -->
      
      <!-- about section end -->
      <div class="search_section">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <h1 class="search_taital">Search Car</h1>
                 
                  <!-- select box section start -->
                  <div class="container">
                     <div class="select_box_section">
                        <div class="select_box_main">
                           <div class="row">
                              <div class="col-md-3 select-outline">
                              <form action="" method="POST">
                                 @csrf
                              <input type="text" placeholder="Merk Mobil" name="merk" style="padding: 10px; border: 1px solid #ccc; border-radius: 5px; width: 100%;">
                              </div>
                          
                              <div class="col-md-3">
                                 <button class="btn btn-success" type="submit">Search</button>
                              </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  </div>
                  <!-- select box section end -->
               </div>
            </div>
         </div>
      </div>
      <!-- gallery section start -->
      <div class="gallery_section layout_padding">
         <div class="container">
            <div class="row">
               <div class="col-md-12">
                  <h1 class="gallery_taital">List Mobil</h1>
               </div>
            </div>
            <div class="gallery_section_2">
               <div class="row">
                 
                 @foreach($list_mobil as $mobil)
                 <div class="col-md-4">
                     <div class="gallery_box">
                        <div class="gallery_img"><img src="{{$mobil->gambar_mobil}}"></div>
                        <h3 class="types_text">{{$mobil->merk}}</h3>
                        @if($mobil->ketersediaan == FALSE)
                        <h3 class="types_text" style="color:green">ketersediaan : 
                           
                           Tersedia
                         
                           
                           </h3>
                        @else
                        <h3 class="types_text" style="color:red">ketersediaan : 
                           
                        Tidak Tersedia
                         
                           
                        </h3>
                        @endif
                    
                          <p class="looking_text">Tarif Harian : Rp.{{$mobil->tarif_sewa_perhari}}</p>
                        <div class="read_bt"><a href="/book_car/{{$mobil->id}}">Book Now</a></div>
                     </div>
                  </div>
                 @endforeach
                 
               </div>
            </div>
            
         </div>
      </div>
      <!-- gallery section end -->
      <!-- choose section start -->
     
      <!-- copyright section end -->
      <!-- Javascript files-->
      <script src="/js/jquery.min.js"></script>
      <script src="/js/popper.min.js"></script>
      <script src="/js/bootstrap.bundle.min.js"></script>
      <script src="/js/jquery-3.0.0.min.js"></script>
      <script src="/js/plugin.js"></script>
      <!-- sidebar -->
      <script src="/js/jquery.mCustomScrollbar.concat.min.js"></script>
      <script src="/js/custom.js"></script>
   </body>
</html>