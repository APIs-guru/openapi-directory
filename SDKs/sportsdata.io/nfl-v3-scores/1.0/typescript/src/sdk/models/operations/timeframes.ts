import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TimeframesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}

export enum TimeframesTypeEnum {
    Current = "current"
,    Upcoming = "upcoming"
,    Completed = "completed"
,    Recent = "recent"
,    All = "all"
}


export class TimeframesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TimeframesFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: TimeframesTypeEnum;
}


export class TimeframesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: TimeframesPathParams;
}


export class TimeframesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  timeframes?: any[];
}
