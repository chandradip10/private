import { Component, OnInit, Inject } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-merchant-panel',
  templateUrl: './merchant-panel.component.html',
  styleUrls: ['./merchant-panel.component.css']
})
export class MerchantPanelComponent implements OnInit {


  pdfSrc='';

  demo=0;

  UserType = 'User Type';
  MerchantName = 'Merchant Name';
  BranchName = 'Branch Name';
  Location = 'Location';
  CurrentStatus = 'Current Status';
  closeResult = '';
  public static status= 'false' ;
  a:number = -1;
  Pdf1: any;
  Pdf2: any;
  Pdf3: any;


  constructor(private modalService: NgbModal , @Inject(DOCUMENT) document) {}
  ngOnInit(): void {

  }

  employees: any [] = [
    { 'UserType': '001', 'MerchantName': 'Alpha', 'BranchName': '05/17/2015', 'Location': 37, 'CurrentStatus': 37 },
    { 'UserType': '002', 'MerchantName': 'Alpha', 'BranchName': '05/17/2015', 'Location': 37, 'CurrentStatus': 37 },
    { 'UserType': '003', 'MerchantName': 'Alpha', 'BranchName': '05/17/2015', 'Location': 37, 'CurrentStatus': 37 },
    { 'UserType': '004', 'MerchantName': 'Alpha', 'BranchName': '05/17/2015', 'Location': 37, 'CurrentStatus': 37 },
    { 'UserType': '005', 'MerchantName': 'Alpha', 'BranchName': '05/17/2015', 'Location': 37, 'CurrentStatus': 37 },
  ];

  myList: any[] =[

  ];

  demoList = [
    'UserType' , 'MerchantName' , 'BranchName' , 'Location' , 'CurrentStatus'
  ];




  public selectedName:any;

  listStatus(){
    this.myList.pop();
    this.myList.pop();
    this.myList.pop();
    this.myList.pop();
    this.myList.pop();
  }



  open(content,emp) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title' , size: 'lg'}).result.then((result) => {
     // this.closeResult = `Closed with: ${result}`;
     content.UserType;
    });
    if(status=='true'){
      this.listStatus();
    }
    else{
      status = 'true';
    }
    this.myList.push(emp.UserType);
    this.myList.push(emp.MerchantName);
    this.myList.push(emp.BranchName);
    this.myList.push(emp.Location);
    this.myList.push(emp.CurrentStatus);
  }

  increment(){
    if(this.a <= 3)
    {
      this.a = this.a+1;
    }
    if(this.a == 4)
    {
      this.a = -1;
    }
  }


  viewPdf(){
    if(document.getElementById('Pdf1'))
    {
     this.pdfSrc="https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
     console.log('hello')
    }
    else if(document.getElementById('Pdf2'))
    {
      this.pdfSrc="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
      console.log('hellooooooooooooooo')
    }
    else if(document.getElementById('Pdf3')){
      this.pdfSrc="http://www.africau.edu/images/default/sample.pdf";
      console.log('1341687')
    }



   /* switch (this.demo) {
      case 1:
        this.pdfSrc="https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
        break;
        case 2:
        this.pdfSrc="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf";
        break;
        case 3:
        this.pdfSrc="http://www.africau.edu/images/default/sample.pdf";
        break;

      default:
        break;
    }*/
    document.getElementById("drop1").style.display='block';
  }





 /* private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }*/

}
