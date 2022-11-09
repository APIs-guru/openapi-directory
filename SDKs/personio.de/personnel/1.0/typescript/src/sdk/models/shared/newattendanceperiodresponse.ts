import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class NewAttendancePeriodResponseData extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number[];

  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class NewAttendancePeriodResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=data" })
  data: NewAttendancePeriodResponseData;

  @Metadata({ data: "json, name=success" })
  success: boolean;
}
