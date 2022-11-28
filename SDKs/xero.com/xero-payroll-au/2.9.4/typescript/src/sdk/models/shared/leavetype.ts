import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LeaveTypeInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPaidLeave" })
  isPaidLeave?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LeaveLoadingRate" })
  leaveLoadingRate?: number;

  @SpeakeasyMetadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NormalEntitlement" })
  normalEntitlement?: number;

  @SpeakeasyMetadata({ data: "json, name=ShowOnPayslip" })
  showOnPayslip?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TypeOfUnits" })
  typeOfUnits?: string;
}


export class LeaveType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CurrentRecord" })
  currentRecord?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IsPaidLeave" })
  isPaidLeave?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LeaveLoadingRate" })
  leaveLoadingRate?: number;

  @SpeakeasyMetadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NormalEntitlement" })
  normalEntitlement?: number;

  @SpeakeasyMetadata({ data: "json, name=ShowOnPayslip" })
  showOnPayslip?: boolean;

  @SpeakeasyMetadata({ data: "json, name=TypeOfUnits" })
  typeOfUnits?: string;

  @SpeakeasyMetadata({ data: "json, name=UpdatedDateUTC" })
  updatedDateUtc?: string;
}
