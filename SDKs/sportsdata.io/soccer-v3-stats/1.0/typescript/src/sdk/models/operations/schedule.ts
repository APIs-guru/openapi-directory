import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScheduleFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class SchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScheduleFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=roundid" })
  roundid: string;
}


export class ScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SchedulePathParams;
}


export class ScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  games?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
