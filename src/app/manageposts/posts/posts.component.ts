import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PostsService } from 'src/app/service/posts.service';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  closeModal: string = "";
  constructor(private API: PostsService, private modalService: NgbModal) {
    this.LoadPosts();
   }

  @ViewChild('modalData') modalData: ElementRef | undefined;
  @ViewChild('modalDelete') modalDelete: ElementRef | undefined;
  AllPosts: any;
  loading: string = '';
  isEdit: boolean = false;
  delId:any;
  model = {
    _id: 0,
    title: "",
    description: "",
    mediapath: "",
    privacylvl: null,
    postdate: Date.now
  }
  options = [
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },

  ];
  ngOnInit(): void {
    this.LoadPosts();
  }
  LoadPosts() {
    this.loading = "please wait loading data ......"
    this.API.GetPosts().subscribe(res => {
      console.log(res);
      this.AllPosts = res;
      this.loading = '';
    })
  }


  triggerModal(content: any) {
    debugger;
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }

  EditModel(post: any) {
    this.model = post;
    this.isEdit = true;
    this.modalService.open(this.modalData);
  }

  Post() {
    if (this.model) {
      if(!this.isEdit){
        this.API.SavePost(this.model).subscribe(res => {
          if (res) {
            this.modalService.dismissAll(0);
            this.LoadPosts();
          }
        });
      }
      else{
        this.API.UpdatePost(this.model).subscribe(res => {
          if (res) {
            this.modalService.dismissAll(0);
            this.LoadPosts();
          }
        });
      }

    }
    else {
      alert("All fields are required");
    }
  }

  DeleteModel(Id: any){
    this.delId = Id;
    this.modalService.open(this.modalDelete);
  }
  ConfirmDelete(){
    if(this.delId){
      this.API.DeletePost(this.delId).subscribe(res=>{
        this.modalService.dismissAll(0);
        this.LoadPosts();
      });
    }
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
