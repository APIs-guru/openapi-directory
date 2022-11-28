import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CurrentSeasonDetailsFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class CurrentSeasonDetailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CurrentSeasonDetailsFormatEnum;
}


export class CurrentSeasonDetailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CurrentSeasonDetailsPathParams;
}


export class CurrentSeasonDetailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  season?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
