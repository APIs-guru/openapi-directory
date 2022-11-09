import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PremiumNewsByPlayerFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class PremiumNewsByPlayerPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PremiumNewsByPlayerFormatEnum;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=playerid" })
  playerid: string;
}


export class PremiumNewsByPlayerRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PremiumNewsByPlayerPathParams;
}


export class PremiumNewsByPlayerResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  news?: any[];

  @Metadata()
  statusCode: number;
}
