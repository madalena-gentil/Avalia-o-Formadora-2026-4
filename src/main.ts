import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { provideHttpClient } from '@angular/common/http'; 
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

// Imports do Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAKzQM9dbfToNCVKvQiBCtADLcHHNHJJ4c",
  authDomain: "minhaloja-419ab.firebaseapp.com",
  projectId: "minhaloja-419ab",
  storageBucket: "minhaloja-419ab.firebasestorage.app",
  messagingSenderId: "688189378668",
  appId: "1:688189378668:web:a2350c8049684c98510849"
};

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideHttpClient(),
    // Agora passamos a variável aqui:
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore())
  ],
});