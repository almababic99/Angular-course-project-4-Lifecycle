import { Component } from '@angular/core';

import { LifecycleComponent } from "./lifecycle/lifecycle.component";

@Component({
    selector: 'app-root',  // 
    standalone: true,   // The component is self-contained and doesn’t require a module (NgModule). The component can be used independently in the app.
    templateUrl: './app.component.html',   // Points to the external HTML file where the component’s HTML template is defined.
    imports: [LifecycleComponent]
})
export class AppComponent {
  lifecycleComponentIsVisible = false;
  lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;

  // This method toggles the value of lifecycleComponentIsVisible between true and false. When true, the LifecycleComponent will be shown in the HTML template. When false, the LifecycleComponent will be hidden.
  onToggleLifecycleComponentVisibility() {  
    this.lifecycleComponentIsVisible = !this.lifecycleComponentIsVisible;
  }

  // This method generates a new random number and updates the lifecycleInputText property. This will change the input text that gets passed to the LifecycleComponent.
  onChangeLifecycleInputText() {
    this.lifecycleInputText = 'Some Random Number: ' + Math.random() * 100;
  }
}
