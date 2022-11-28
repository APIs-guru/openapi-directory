import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum InjuriesHistoricalFormatEnum {
    Xml = "XML",
    Json = "JSON"
}


export class InjuriesHistoricalPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: InjuriesHistoricalFormatEnum;
}


export class InjuriesHistoricalRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InjuriesHistoricalPathParams;
}


export class InjuriesHistoricalResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  injuries?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
