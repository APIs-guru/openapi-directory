import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CurrentWeekFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class CurrentWeekPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CurrentWeekFormatEnum;
}


export class CurrentWeekRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CurrentWeekPathParams;
}


export class CurrentWeekResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  currentWeek200ApplicationJsonInteger?: number;

  @SpeakeasyMetadata()
  statusCode: number;
}
