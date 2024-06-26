import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router } from '@angular/router';
import { FirebaeService } from '../services/firebae.service';
import { UtilsService } from '../services/utils.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  const firebaseSrv =inject(FirebaeService)
  const router = inject(Router)
  const user =localStorage.getItem('user')

return new Promise((resolve)=>{
  firebaseSrv.getauth().onAuthStateChanged(auth=>{
  
    if(!auth || !user){
      resolve(true)
    }else{
      resolve(router.createUrlTree(['/main']))
    }
  })
})
  
};
