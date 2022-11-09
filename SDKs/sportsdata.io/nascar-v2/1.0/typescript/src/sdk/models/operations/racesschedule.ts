import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum RacesScheduleFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class RacesSchedulePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RacesScheduleFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class RacesScheduleRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RacesSchedulePathParams;
}


export class RacesScheduleResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  races?: any[];

  @Metadata()
  statusCode: number;
}
