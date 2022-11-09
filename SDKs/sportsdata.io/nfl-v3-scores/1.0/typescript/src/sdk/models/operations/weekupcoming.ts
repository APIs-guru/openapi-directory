import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WeekUpcomingFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class WeekUpcomingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: WeekUpcomingFormatEnum;
}


export class WeekUpcomingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: WeekUpcomingPathParams;
}


export class WeekUpcomingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  weekUpcoming200ApplicationJsonInteger?: number;
}
