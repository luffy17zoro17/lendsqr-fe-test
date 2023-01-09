import '../styles/globals.css'

import { Provider } from 'react-redux';
import {Store} from "../store/store";

export default function App({ Component, pageProps }) {

/**  Filtering and Pagination, both Im yet to learn so ive left them out */


  return (
   <Provider store={Store}> 
      <Component {...pageProps}/>
   </Provider> 
    );    
}
