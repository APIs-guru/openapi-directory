import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScheduleFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class SchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScheduleFormatEnum;
}


export class ScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SchedulePathParams;
}


export class ScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tournaments?: any[];
}
