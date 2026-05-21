import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'An unknown error occurred!';
        
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          errorMessage = `Error: ${error.error.message}`;
        } else {
          // Server-side error (API)
          if (error.status === 400) {
            errorMessage = 'Bad Request: Please check your input parameters.';
          } else if (error.status === 404) {
            errorMessage = 'Requested resource not found.';
          } else if (error.status === 500) {
            errorMessage = 'Internal Server Error: Something went wrong on the server.';
          }
        }
        
        // Displays the error alert to the user [cite: 28, 67]
        alert(errorMessage); 
        return throwError(() => new Error(errorMessage));
      })
    );
  }
}