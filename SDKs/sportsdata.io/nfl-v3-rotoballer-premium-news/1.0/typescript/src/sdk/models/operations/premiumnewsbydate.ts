import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PremiumNewsByDateFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class PremiumNewsByDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=date" })
  date: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PremiumNewsByDateFormatEnum;
}


export class PremiumNewsByDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PremiumNewsByDatePathParams;
}


export class PremiumNewsByDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  news?: any[];

  @Metadata()
  statusCode: number;
}
