import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TimeframesFormatEnum {
    Xml = "XML",
    Json = "JSON"
}

export enum TimeframesTypeEnum {
    Current = "current",
    Upcoming = "upcoming",
    Completed = "completed",
    Recent = "recent",
    All = "all"
}


export class TimeframesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: TimeframesFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: TimeframesTypeEnum;
}


export class TimeframesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: TimeframesPathParams;
}


export class TimeframesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  timeframes?: any[];
}
