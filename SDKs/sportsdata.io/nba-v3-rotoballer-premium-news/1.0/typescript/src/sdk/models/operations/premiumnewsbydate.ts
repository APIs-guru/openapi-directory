import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PremiumNewsByDateFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class PremiumNewsByDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PremiumNewsByDateFormatEnum;
}


export class PremiumNewsByDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PremiumNewsByDatePathParams;
}


export class PremiumNewsByDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  news?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
