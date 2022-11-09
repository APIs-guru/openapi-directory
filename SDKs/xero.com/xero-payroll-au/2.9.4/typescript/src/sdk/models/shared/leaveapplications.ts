import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LeaveApplication } from "./leaveapplication";


export class LeaveApplications extends SpeakeasyBase {
  @Metadata({ data: "json, name=LeaveApplications", elemType: shared.LeaveApplication })
  leaveApplications?: LeaveApplication[];
}
