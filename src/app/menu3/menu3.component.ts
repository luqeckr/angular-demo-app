import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-menu3',
  templateUrl: './menu3.component.html',
  styleUrls: ['./menu3.component.less']
})
export class Menu3Component implements OnInit {

  myForm: FormGroup
  constructor(
    private _fb: FormBuilder
  ) {
    this.myForm = this._fb.group({
      nama: ['', Validators.required],
      alamat: this._fb.group({
        jalan: [''],
        kota: [''],
        propinsi: ['']
      }),
      hobis: this._fb.array([
        this._fb.control('')
      ])
    })
   }

  ngOnInit(): void {
    
  }

  get hobis() {
    return this.myForm.get('hobis') as FormArray
  }

  addHobis() {
    this.hobis.push(this._fb.control(''))
  }

  onSubmit() {
    console.log(this.myForm.value)
  }
}
