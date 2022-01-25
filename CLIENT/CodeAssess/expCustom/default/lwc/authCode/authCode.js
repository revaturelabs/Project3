import { LightningElement, wire } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';

export default class AuthCode extends LightningElement {

   currentPageReference = null; 
   urlStateParameters = null;

   authCode = null;

   @wire(CurrentPageReference)
   getStateParameters(currentPageReference) {
      if (currentPageReference) {
         this.urlStateParameters = currentPageReference.state;
         this.setParametersBasedOnUrl();
      }
   }

   setParametersBasedOnUrl() {
      this.authCode = this.urlStateParameters.code || 'Authorization Code Unavailable';
   }

   get authCode() {
      return this.authCode;
   }
}