import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum OperatingStatusCodeEnum {
    Normal = "NORMAL"
,    Notice = "NOTICE"
,    Limited = "LIMITED"
,    Closed = "CLOSED"
}


// OperatingStatus
/** 
 * Current status of facility operations. The overall status of the facility, which can be: Normal Hours and Services, Facility Notice, Limited Hours and/or Services, or Closed. This field replaces active_status.
**/
export class OperatingStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=additional_info" })
  additionalInfo?: string;

  @Metadata({ data: "json, name=code" })
  code: OperatingStatusCodeEnum;
}
