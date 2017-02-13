import { UploadService } from './../services/upload.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  private file: File;
  private description: string = '';

  constructor(private uploadService: UploadService) { }

  uploadPost = (event: any, value: any) => {
    const fileElement = event.target.querySelector('input[type=file]');
    const file = fileElement.files[0];

    const formData = new FormData();
    formData.append('file', file);
    formData.append('description', value.description);

    this.uploadService.upload(formData).subscribe(data => {
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
