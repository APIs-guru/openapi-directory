import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TimeframesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
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
