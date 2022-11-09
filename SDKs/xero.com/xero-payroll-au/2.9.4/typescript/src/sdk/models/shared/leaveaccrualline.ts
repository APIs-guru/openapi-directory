import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LeaveAccrualLine extends SpeakeasyBase {
  @Metadata({ data: "json, name=AutoCalculate" })
  autoCalculate?: boolean;

  @Metadata({ data: "json, name=LeaveTypeID" })
  leaveTypeId?: string;

  @Metadata({ data: "json, name=NumberOfUnits" })
  numberOfUnits?: number;
}
