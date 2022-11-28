import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PremiumNewsFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class PremiumNewsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PremiumNewsFormatEnum;
}


export class PremiumNewsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PremiumNewsPathParams;
}


export class PremiumNewsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  news?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
