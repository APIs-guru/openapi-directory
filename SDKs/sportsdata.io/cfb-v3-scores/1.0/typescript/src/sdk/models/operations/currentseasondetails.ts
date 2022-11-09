import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CurrentSeasonDetailsFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class CurrentSeasonDetailsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CurrentSeasonDetailsFormatEnum;
}


export class CurrentSeasonDetailsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CurrentSeasonDetailsPathParams;
}


export class CurrentSeasonDetailsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  season?: any;

  @Metadata()
  statusCode: number;
}
