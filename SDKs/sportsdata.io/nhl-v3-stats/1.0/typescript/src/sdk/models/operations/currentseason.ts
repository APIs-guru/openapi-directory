import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CurrentSeasonFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class CurrentSeasonPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CurrentSeasonFormatEnum;
}


export class CurrentSeasonRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CurrentSeasonPathParams;
}


export class CurrentSeasonResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  season?: any;

  @Metadata()
  statusCode: number;
}
