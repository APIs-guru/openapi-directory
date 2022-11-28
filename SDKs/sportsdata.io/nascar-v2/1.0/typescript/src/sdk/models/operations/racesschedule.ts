import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum RacesScheduleFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class RacesSchedulePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: RacesScheduleFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;
}


export class RacesScheduleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RacesSchedulePathParams;
}


export class RacesScheduleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  races?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
