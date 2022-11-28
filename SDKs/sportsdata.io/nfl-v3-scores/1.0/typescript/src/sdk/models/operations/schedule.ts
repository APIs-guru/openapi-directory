import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ScheduleFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class SchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScheduleFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class ScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SchedulePathParams;
}


export class ScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  schedules?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
