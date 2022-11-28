import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WeekUpcomingFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class WeekUpcomingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: WeekUpcomingFormatEnum;
}


export class WeekUpcomingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: WeekUpcomingPathParams;
}


export class WeekUpcomingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  weekUpcoming200ApplicationJsonInteger?: number;
}
