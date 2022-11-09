import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ScheduleFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class SchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: ScheduleFormatEnum;
}


export class ScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SchedulePathParams;
}


export class ScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tournaments?: any[];
}
