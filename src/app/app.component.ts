import { Component } from '@angular/core';

import { UserPermissionService } from "my-lib/my-lib";

@Component({
	selector: 'app-root',
	template: '<router-outlet></router-outlet>'
})
export class AppComponent {
	constructor(private userPpermissionService: UserPermissionService) {
		console.log(this.userPpermissionService);
		this.userPpermissionService.getPermissionTo(["Visualizar", "Editar", "Excluir"],
			{ domain: 'hcm', service: 'pulse', resource: "questionnaire" })
			.subscribe(res => {
				console.log(res);
			})
	}

}