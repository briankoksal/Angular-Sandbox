import { Component, OnInit } from '@angular/core';
import { PolicyService } from './../policy.service';

@Component({
  selector: 'app-policy-list',
  templateUrl: './policy-list.component.html',
  styleUrls: ['./policy-list.component.less']
})
export class PolicyListComponent implements OnInit {

  policies: any[] = [];
  policy: any;
  constructor(private policyService: PolicyService) { }

  ngOnInit() {
    this.policyService.getPolicies().subscribe((data : any[])=>{
        console.log(data);
        this.policies = data;
    })
  }

  refresh() {
    this.policyService.getPolicies().subscribe((data : any[])=>{
        console.log(data);
        this.policies = data;
    })
  }


  public deletePolicy(policyId){
    this.policyService.deletePolicy(policyId).subscribe((ret)=>{
          console.log("Policy deleted: ", ret);
          this.refresh();
    })
}


public updatePolicy(policy: {id: number, amount: number, clientId: number, userId: number, description: string}){
    let newPolicy:{id: number, amount: number, clientId: number, userId: number, description: string} = {id:policy.id, amount:0, clientId:0, userId:0, description:"test"};
    this.policyService.updatePolicy(newPolicy).subscribe((ret)=>{
          console.log("Policy updated: ", ret);
          this.refresh();
    });
}  

public createPolicy(policy){
  this.policyService.createPolicy(policy).subscribe((ret)=>{
        console.log("Policy created: ", ret);
  });
}

}