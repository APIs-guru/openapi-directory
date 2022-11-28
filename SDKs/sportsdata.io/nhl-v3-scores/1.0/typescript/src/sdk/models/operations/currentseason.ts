import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CurrentSeasonFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class CurrentSeasonPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: CurrentSeasonFormatEnum;
}


export class CurrentSeasonRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CurrentSeasonPathParams;
}


export class CurrentSeasonResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  season?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
