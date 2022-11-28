import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WeekCurrentFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class WeekCurrentPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: WeekCurrentFormatEnum;
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
