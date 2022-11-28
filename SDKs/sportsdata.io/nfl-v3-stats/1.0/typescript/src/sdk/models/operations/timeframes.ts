import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TimeframesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=type" })
  type: string;
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
