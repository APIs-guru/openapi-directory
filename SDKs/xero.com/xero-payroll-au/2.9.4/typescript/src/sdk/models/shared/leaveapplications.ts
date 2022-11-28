import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LeaveApplication } from "./leaveapplication";



export class LeaveApplications extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LeaveApplications", elemType: LeaveApplication })
  leaveApplications?: LeaveApplication[];
}
