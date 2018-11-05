# Neighborhood Map (React)

 Neighborhood Map is a single page application featuring a map of my neighborhood where i would like to visit. The map including highlighted locations, third-party data about those locations and various ways to browse the content.

## ⚡️ Installation

Use the package manager [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/) to install MyReads.

> In the project directory, you can run:
```bash
$ npm install
$ yarn start || npm start
```
> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 🎯 Usage

<!-- TODO: Writing the usage -->
* You will need a `Google Maps Platform` API key along with a `Foursquare Client ID` and a `Foursquare Client Secret` to use in the application:
    - If you do not have a Google Maps API key already, then you can obtain a `Google Maps Platform` API key for free [here](https://cloud.google.com/maps-platform/). You will have to create a billing account but there is a built in credit.
    - If you do not have the `Foursquare Client ID` or `Foursquare Client Secret`, then you can obtain them [here](https://developer.foursquare.com/) by first creating a free account.
    - After you have all three data items, go to new folder in the `src` directory called `api`.
    - Within `api`, there will be a Javascript file called `APIkey.js`. Within this file add the following lines, where `YOUR_GOOGLE_KEY`, `YOUR_FOURSQUARE_CLIENT_ID`, and `YOUR_FOURSQUARE_CLIENT_SECRET` are replaced by your personalized data values (don't forget the delimiting quotes):
    ```
    export const GOOGLE_MAP_API_KEY = 'YOUR_GOOGLE_KEY'
    export const FOURSQUARE_CLIENT_ID = 'YOUR_FOURSQUARE_CLIENT_ID'
    export const FOURSQUARE_CLIENT_SECRET = 'YOUR_FOURSQUARE_CLIENT_SECRET'
    ```
    - Save the file.

## 🛠 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## 🔑 License
[MIT](https://github.com/MajhiRockzZ/FEND-Project-6/blob/master/LICENSE)

## 🏆 Credits

[Sumesh Majhi](https://github.com/MajhiRockzZ)

## 💐 Acknowledgments

Special thanks to Udacity and Google Scholarships team.