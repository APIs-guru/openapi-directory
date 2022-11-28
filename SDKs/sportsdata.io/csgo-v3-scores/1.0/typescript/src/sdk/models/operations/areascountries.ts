import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum AreasCountriesFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class AreasCountriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: AreasCountriesFormatEnum;
}


export class AreasCountriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AreasCountriesPathParams;
}


export class AreasCountriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  areas?: any[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
