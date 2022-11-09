import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LeaveBalance extends SpeakeasyBase {
  @Metadata({ data: "json, name=LeaveName" })
  leaveName?: string;

  @Metadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @Metadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;

  @Metadata({ data: "json, name=TypeOfUnits" })
  typeOfUnits?: string;
}
