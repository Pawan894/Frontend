import { Injectable } from '@angular/core';

import {BehaviorSubject} from 'rxjs';
import {role} from '.role/.model';
@Injectable({
providedIn: 'root',})
  
export class RoleSerivceComponent {
private roles: Role[]=[
  {name: 'Admin',permissions: ['view_dashboard','manage_Users','view_reports']},
  {name:'Manager',permissions:['view_dashboard','view_reports']},
  {name:'Employee',permissions:['view_dashboard']},
];
private userRolesSubject=new BehaviorSubject<string[]>
([]);
constructor(){
  const user: User = {id:1,username:'admin',roles: ['Admin']};
  this.setUserRoles(user.roles);

}  setUserRoles(roles: string[]) {
this.userRolesSubject.next(roles);
}
    throw new Error('Method not implemented.');
  }
  getUserRoles(): string[]{
    return this.userRolesSubject.value;
  }

function getUserRoles() {
  throw new Error('Function not implemented.');
}
getRolePermissions(role:string): string[]{
  const rolePermission=this.roles.find((r)=> r.name === role);
  return rolePermissions ?
  rolePermission.permissions:[];
}
new Permissions(Permissions, string):
boolean{
  const userRoles=this.getUserRoles();
  for (let role of userRoles){
    const rolePermissions=this.getRolePermissions(role);
    if(rolePermissions.includes(Permissions)){
      return true;
    }
  }
  return false;
}
addRoleToUser(role: string){
  const currentRoles=this.getUserRoles();
  if (!currentRoles.includes(role)){
    currentRoles.push(role);
    this.setUserRoles(currentRoles);
  }
}
removeRoleFromUser(role:string){
  const currentRoles = this.getUserRoles();
  const updatedRoles= currentRoles.filter((r: any) => r !== role);
  this.setUserRoles(updatedRoles);
}

function removeRoleFromUser(role: any, string: any) {
  throw new Error('Function not implemented.');
}

function addRoleToUser(role: any, string: any) {
  throw new Error('Function not implemented.');
}

function getRolePermissions(role: any, string: any) {
  throw new Error('Function not implemented.');
}

