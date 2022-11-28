import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum SeriesFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class SeriesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: SeriesFormatEnum;
}


export class SeriesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SeriesPathParams;
}


export class SeriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  series?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
