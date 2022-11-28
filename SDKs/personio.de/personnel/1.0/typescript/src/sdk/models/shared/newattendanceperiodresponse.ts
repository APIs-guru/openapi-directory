import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class NewAttendancePeriodResponseData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number[];

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class NewAttendancePeriodResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=data" })
  data: NewAttendancePeriodResponseData;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success: boolean;
}
