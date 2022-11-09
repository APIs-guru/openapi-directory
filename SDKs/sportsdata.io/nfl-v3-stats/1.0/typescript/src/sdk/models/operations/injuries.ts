import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum InjuriesFormatEnum {
    Xml = "XML"
,    Json = "JSON"
}


export class InjuriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: InjuriesFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=season" })
  season: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=week" })
  week: string;
}


export class InjuriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: InjuriesPathParams;
}


export class InjuriesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  injuries?: any[];

  @Metadata()
  statusCode: number;
}
