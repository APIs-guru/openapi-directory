import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WeekCurrentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: string;
}


export class WeekCurrentRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WeekCurrentPathParams;
}


export class WeekCurrentResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  weekCurrent200ApplicationJsonInteger?: number;
}
