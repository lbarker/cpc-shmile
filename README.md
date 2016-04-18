# CPC Shmile is a nodejs-based photobooth derived from Shmile

With a digital camera, a laptop and a printer, CPC can create a DIY low-cost photobooth for events. App based off Shmile: http://github.com:porkbuns/shmile.git

### Added CPC Features

#### CPC Branded
Overlay image has been branded with CP Open House. All colors in user interface utilize CPC branding.

#### MinimalForm: https://github.com/codrops/MinimalForm
After the app has cycled through 4 photos, it now displays MinimalForm while hiding the composited image. This allows CPC to gather user information.

#### Google Spreadsheet for User Data
User data submited through MinimalForm is stored in google spreadsheet - currently titled CPC_OpenHouse under the calpolycorporation@gmail.com account.
Documentation used to create this feature:
http://railsrescue.com/blog/2015-05-28-step-by-step-setup-to-send-form-data-to-google-sheets/


### Installation for CPC Event

#### Technology
All devices need to be connected to the same network - perferable cpc-wifi.

Laptop needs to be connected to ethernet to connected to the .93 server. This allows us to sym-link photos from laptop to server so print and copy can grab them. ( this feature was used for OpenHouse)

Make sure computer registers camera when you connect it - iPhotos will open. 


### Before you get started

#### Overlay

Create your own custom overlay. Make sure it is a 4x6 crop factor, save it as a 24-bit transparent PNG. See `public/images/overlay.png` for an example.

It is recommended that this overlay image is 2400x1600px large.

When you are done, save your overlay resource into `public/images/overlay.png`.

#### Camera Tips

* Mount the camera on a steady tripod.
* It helps to set your camera on manual focus and on its lowest resolution. This reduces shutter lag time.
* Make sure your flash is charged. If it is not, the camera will wait until the flash charges before firing the shutter, making very awkward, long pauses for your guests to be smiling.

#### Printer

By default, shmile does not try to print to a printer. However, should
you decide to use one (I personally use a Canon CP770), it should be
relatively simple to set up.

1. Make sure your printer is set as the system default.
2. When booting your server, be sure to supply a `PRINTER=true`
   environment variable. For example:

    $ PRINTER=true coffee app.coffee

#### Issues Documented During CP OpenHouse - Version 1.0

Only 1 device should be connected to port 3000. Too many devices connected makes it crash. Make sure all browsers on laptop and iPad are not viewing the app. Then open just 1 browser.

Low batterpower on the camera = no pictures being taken

Camera has to be set to JPEG. No RAW photos allowed. 

Sophias camera did not work with the app - newer cannon SLR, while the CPC Nikon SLR worked fine. 

Cord connecting laptop to camera would jiggle loose if camera was moved - caused a crash. 

Test app with camera that will be used thorughly before using during event. 



##### Cord connecting 




### Deploying/running

#### Server instance

The server is responsible for controlling the camera, and serving the Web interface that users will see. Here we assume that you already have [Homebrew](http://brew.sh/) installed and running on your Mac.

##### Install node & npm

    $ brew install node

Note that `shmile` officially supports Node `v0.12`, `4.2`, and `5.0`.

##### Install imagemagick

    $ brew install imagemagick

##### Install [`gphoto2`](http://www.gphoto.org/proj/gphoto2/)

    $ brew install gphoto2

##### Install gulp, coffee-script globally (if you haven't already)

    $ npm install -g gulp coffee-script

##### Install bower

    $ npm install -g bower

##### Get the project running.

Go to project root. We assume that you've checked out this repo into `/path/to/shmile`.

    $ cd /path/to/shmile
    $ npm install
    $ bower install
    $ coffee app.coffee

The server should begin running.

#### Configuration variables

* `PRINTER=true` causes shmile to queue up a print job to your default
  printer as soon as a photo session is complete.
* `STUB_CAMERA=true` allows you to not use the camera control interface.
  You should only need this feature when you are actually developing on
  shmile.

### Control view

This is a Web browser that displays the camera control interface, and shows the visitor the real-time creation of the image. For simple deployments, this can simply be on the same computer that is running the server.

1. Navigate to `localhost:3000` in a evergreen Web browser (Chrome and Safari latest recommended).
2. If you want to use an iPad to display this interface, you'll need to have the laptop and iPad connected to the same network. Open Safari on iPad, and type in `<computer-name>:3000` to the Address Bar. Tap the `Go To` button in the Safari bar, and save the app to your home screen (see: http://www.apple.com/iphone/tips/).
3. On your iPad Home Screen, open the "shmile" app you've just created.

### Gallery view

This is a Web browser instance that displays a view of all the generated images taken so far.

1. With the server already running on another browser instance, visit `http://localhost:3000/gallery` (or `<server_address>:3000/gallery` if you're connecting over a network)
2. If you're viewing on iPad, open the site in Safari, then save it as a Home Screen app as detailed above. Open the "gallery!" app from your home screen.
3. You should see a touchable, swipeable list of images that have already been taken. As photos are taken, the new images will be pushed to this Web view in the background.

Note: this is currently buggy and will not work if you don't have any images taken yet. Visit this view when a few photos have been generated.

### Notes

* This was developed for OS X. I cannot help you if you're attempting to run on Windows or Linux distributions.
* Note that the `PTPCamera` daemon boots up whenever you plug in your camera. Running a `killall PTPCamera` will do the trick. Shmile automatically runs this command for you when you boot up.

### Contributing to shmile

Submit a PR to this repository. Make sure you explain what your PR is
doing and appropriate test coverage is in place.

### shmile-ui

If you're looking for the source to the JS frontend, you'll find it at the [shmile-ui](https://github.com/andrewhao/shmile-ui) repository.

#### Developing shmile without requiring a camera module

When developing on shmile, it helps to decouple the camera
subsystem from the UI so you can test end-to-end without the camera. To this end, you can supply a `STUB_CAMERA=true` environment variable. A stub camera will substitute for the gphoto2 backend.

### Credits

* gphoto/node integration was inspired by https://github.com/underbluewaters/node-photobooth
* Touch-enabled Web gallery interface courtesy of [PhotoSwipe](http://www.photoswipe.com). Fork it: https://github.com/codecomputerlove/PhotoSwipe
* shmile is a port of [boink](http://github.com/andrewhao/boink), the original Rails-based photobooth written by Glen Wong and myself.

![Shmile in action](http://farm8.staticflickr.com/7234/7154204305_9b146192dd_z.jpg)

### License

#### GPLv2

http://www.opensource.org/licenses/GPL-2.0

#### MIT

http://www.opensource.org/licenses/MIT
