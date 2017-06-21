import { Component, OnInit } from '@angular/core';

import { ClientService } from './service';
import { Client } from './model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  clients: Array<Client> = [];

  constructor(
    private clientService: ClientService
  ) {}

  ngOnInit() {
    this.getClients();
  }

  private getClients(): void {
    this.clientService.getClients().subscribe((res: Array<Client>) => {
      this.clients = res;
    });
  }
}
