import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScheduleFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class SchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScheduleFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=roundid" })
  roundid: string;
}


export class ScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SchedulePathParams;
}


export class ScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  games?: any[];

  @Metadata()
  statusCode: number;
}
