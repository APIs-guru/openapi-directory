import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum AreasCountriesFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class AreasCountriesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: AreasCountriesFormatEnum;
}


export class AreasCountriesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AreasCountriesPathParams;
}


export class AreasCountriesResponse extends SpeakeasyBase {
  @Metadata()
  areas?: any[];

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
