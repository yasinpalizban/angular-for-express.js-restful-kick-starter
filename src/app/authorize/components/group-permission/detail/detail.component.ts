import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';


import {ActivatedRoute, Params, Router} from '@angular/router';
import {IQuery} from '../../../../shared/interfaces/query.interface';

import {LocationChangeListener} from "@angular/common";

import {IGroupPermission} from "../../../interfaces/group.permission.interface";
import {GroupPermissionService} from "../../../services/group.permission.service";

@Component({
  selector: 'app-permission-group-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit, OnDestroy {
  nestId: string;
  id: string;
  subscription$: Subscription[];
  permissionGroupDetail!: IGroupPermission;

  @HostListener('window:popstate', ['$event'])
  onPopState(event: LocationChangeListener): void {

    let params: IQuery = {};


    this.subscription$.push(this.permissionGroupService.getQueryArgumentObservable().subscribe((qParams: IQuery) => {

      params = qParams;


    }));

    this.permissionGroupService.setQueryArgument(params);
    this.router.navigate(['./admin/group-permission/list'], {
      queryParams: params,
    });
  }

  constructor(
    private permissionGroupService: GroupPermissionService,
    private aRoute: ActivatedRoute, private router: Router) {
    this.nestId = "";
    this.id = "";
    this.subscription$ = [];

  }

  ngOnInit(): void {

    this.subscription$.push(
      this.aRoute.params.pipe().subscribe((params: Params) => {

        this.id = params.id;

      }));


    this.subscription$.push(
      this.permissionGroupService.getSharedObservable().subscribe((id) => this.nestId = id)
    );

    this.permissionGroupService.nestedUrl(this.nestId).query(this.id);

    this.subscription$.push(
      this.permissionGroupService.getDataObservable().subscribe((permission: IGroupPermission) => {
        this.permissionGroupDetail = permission;
      }));
  }

  ngOnDestroy(): void {

    this.subscription$.forEach(sub => sub.unsubscribe());

  }
}
