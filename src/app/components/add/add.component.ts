import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  user: User = new User();

  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  addUser(): void {
    this.userService.createUser(this.user).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
