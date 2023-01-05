import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  public pages: any = [
    {
      name: "Page 1",
      id: 1,
      title: "Basic Information",
      fieldName: "Full name",
      paramKey: "name"
    },
    {
      name: "Page 2",
      id: 2,
      title: "Personal Details",
      fieldName: "Email",
      paramKey: "emailId"
    },
    {
      name: "Page 3",
      id: 3,
      title: "Contact Info",
      fieldName: "Phone No.",
      paramKey: "phoneNum"
    },
    {
      name: "Page 4",
      id: 4,
      title: "Education",
      fieldName: "Highest Qualification",
      paramKey: "edu"
    },
    {
      name: "Page 5",
      id: 5,
      title: "Professional Info",
      fieldName: "Relevant Experience",
      paramKey: "exp"
    }
  ];
  public pageDetailsObj: any = {
    selectedPage: 1
  };
  ngOnInit() {
    if (sessionStorage.getItem("pageDetails")) {
      this.pageDetailsObj = JSON.parse(sessionStorage.getItem("pageDetails"));
    }
    this.pageDetailsObj.showSuccessMsg = false;
  }
  public navigateTo = (pageNumber) => {
    this.pageDetailsObj.selectedPage = pageNumber;
  };
  public saveDraft(action) {
    switch (action) {
      case "BACK":
        this.pageDetailsObj.selectedPage -= 1;
        sessionStorage.setItem("pageDetails", this.pageDetailsObj);
        break;
      case "NEXT":
        this.pageDetailsObj.selectedPage += 1;
        sessionStorage.setItem("pageDetails", this.pageDetailsObj);
        break;
      case "FINISH":
        this.pageDetailsObj.showSuccessMsg = true;
        setTimeout(() => {
          this.pageDetailsObj.showSuccessMsg = false;
        }, 500);
        break;
      default:
        break;
    }
    sessionStorage.setItem("pageDetails", JSON.stringify(this.pageDetailsObj));
  }
}
