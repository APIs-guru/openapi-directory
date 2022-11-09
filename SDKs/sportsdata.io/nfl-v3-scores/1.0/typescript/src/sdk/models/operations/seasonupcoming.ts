import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum SeasonUpcomingFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class SeasonUpcomingPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SeasonUpcomingFormatEnum;
}


export class SeasonUpcomingRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SeasonUpcomingPathParams;
}


export class SeasonUpcomingResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seasonUpcoming200ApplicationJsonInteger?: number;

  @Metadata()
  statusCode: number;
}
