import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum PremiumNewsByPlayerFormatEnum {
    Xml = "xml",
    Json = "json"
}


export class PremiumNewsByPlayerPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PremiumNewsByPlayerFormatEnum;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class PremiumNewsByPlayerRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PremiumNewsByPlayerPathParams;
}


export class PremiumNewsByPlayerResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  news?: any[];

  @SpeakeasyMetadata()
  statusCode: number;
}
