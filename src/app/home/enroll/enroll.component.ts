import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, ValidationErrors } from '@angular/forms';
import { EnrollService } from '../../services/enroll.service';

declare let $;
@Component({
  selector: 'app-enroll',
  templateUrl: './enroll.component.html',
  styleUrls: ['./enroll.component.css']
})
export class EnrollComponent implements OnInit {

  //FormELement
  enrollForm: FormGroup;
  //Keep track at which element is at
  counterForm: number = 0;
  //Prompting users with error
  errorMsg = "";
  //Is api calling show loader if true
  apiCalling = false;


  constructor(private fb: FormBuilder, private enrollService: EnrollService) { }

  ngOnInit() {
    this.initEnrollForm();
    this.initHover();
  }


  /** Generate Form on init cycle hook. */
  initEnrollForm() {
    this.enrollForm = this.fb.group({
      fullname: ['sdfsdf', [Validators.required]],
      mobileno: ['9022171228', [Validators.required, Validators.pattern('^[6-9]{1}\\d{9}$'), Validators.maxLength(10)]],
      emailid: ['anuj@gmail.com', [Validators.required, Validators.email]],
      message: ['asdfsdfsdf', [Validators.required]],
    });
  }


  /** Get form element at view so we can avoid calling complete formElement. */
  get f() { return this.enrollForm.controls; }


  /** Reset form element when form submitted or left in error state
   * Will always trigger when enroll button is clicked
   */
  resetFormFields() {
    this.enrollForm && this.enrollForm.reset();
    this.counterForm = 0;
  }


  /** since popup element is binind dynamic hence need to render this using jquery. */
  initHover() {
    $('#errorInfo').popup();
  }

  /** On click of uer enroll button open modal and reset form. */
  openForm() {
    this.resetFormFields();
    $('#showForm').modal('show');
  }


  /** There is an next and previous button which are controlled using this. */
  changeCounter(increment: boolean) {
    increment ? this.counterForm++ : this.counterForm--;
    this.getErrorMsg();
  }


  /** Once form is valid we are ready to enroll user. */
  enrollMe() {
    if (this.enrollForm.valid) {
      this.apiCalling = !this.apiCalling;
      let reqBody = this.enrollForm.value;
      console.log(reqBody);
      this.enrollService.submitEnroll(reqBody).subscribe((res) => {
        console.log(res);
        $('#showForm').modal('hide');
        $('#submittedForm').modal('show');
      }, (err) => {
        this.apiCalling = !this.apiCalling;
      })
    }
  }

  /** Need to show error message when user skip that state.
  * This function will get all error message and bind to errorMsg string with comma
  */
  getErrorMsg() {
    this.errorMsg = "";
    Object.keys(this.enrollForm.controls).forEach((key) => {
      const controlForm = this.enrollForm.get(key);
      if (controlForm.touched && controlForm.dirty && controlForm.errors) {
        Object.keys(controlForm.errors).forEach(keyError => {
          this.errorMsg += `${key} is invalid, `;
        });
      }
    });
    setTimeout(this.initHover, 1000);
  }


  /** Handle event for enter so that user doesn't required to click on next button 
   * He can just press enter this function will handle weather to submit the enroll Me or process to next step
   * . */
  keyDownEvent(event: any) {
    if (event.keyCode == 13) {
      this.counterForm == 3 ? this.enrollMe() : this.changeCounter(true);
    }
  }
}
