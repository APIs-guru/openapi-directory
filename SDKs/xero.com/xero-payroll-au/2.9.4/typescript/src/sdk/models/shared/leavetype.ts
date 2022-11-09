import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LeaveType extends SpeakeasyBase {
  @Metadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @Metadata({ data: "json, name=IsPaidLeave" })
  isPaidLeave?: boolean;

  @Metadata({ data: "json, name=LeaveLoadingRate" })
  leaveLoadingRate?: number;

  @Metadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NormalEntitlement" })
  normalEntitlement?: number;

  @Metadata({ data: "json, name=ShowOnPayslip" })
  showOnPayslip?: boolean;

  @Metadata({ data: "json, name=TypeOfUnits" })
  typeOfUnits?: string;

  @Metadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;
}
