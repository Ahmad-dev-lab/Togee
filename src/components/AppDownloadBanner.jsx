import React from "react";

function AppDownloadBanner() {
  return (
    <div className="bg-gray-100 py-8 ">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side - Logo + Text */}
        <div className="flex items-center gap-3">
          <img
            src="http://scontent.flyp4-1.fna.fbcdn.net/v/t39.30808-6/309029605_478235947653967_3437583125457851400_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=W2YdMPaI1-IQ7kNvwGWncAL&_nc_oc=Adk_zjsH2glzL_dGWLJ13kEDr-r_0X1oHCa3odPMaNFLZc07V5HeoixxfOvV16fzetA&_nc_zt=23&_nc_ht=scontent.flyp4-1.fna&_nc_gid=7-mWPY0cs3tSwglB6IhOiA&oh=00_Afh1oBCHiJZajQbmyUyMlr3vNZTbXZjRcFcy_zxKFSqzFQ&oe=692D22E5" 
            alt="Logo"
            className="h-10 w-10 rounded"
          />
          <div>
            <h2 className="text-xl font-semibold text-black">Happy Shopping</h2>
            <p className="text-sm text-gray-600">Download</p>
          </div>
        </div>

        {/* Right Side - App Store Badges */}
        <div className="flex gap-4 flex-wrap justify-center">
          <img
            src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
            alt="App Store"
            className="h-8"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
            alt="Google Play"
            className="h-8"
          />
          {/* Dummy AppGallery Badge */}
          <div className="h-8 px-4 bg-black text-white flex items-center justify-center rounded">
            AppGallery
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppDownloadBanner;
