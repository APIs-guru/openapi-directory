import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LeaveAccrualLine extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AutoCalculate" })
  autoCalculate?: boolean;

  @SpeakeasyMetadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @SpeakeasyMetadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;
}
