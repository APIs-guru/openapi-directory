import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum PremiumNewsFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class PremiumNewsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: PremiumNewsFormatEnum;
}


export class PremiumNewsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PremiumNewsPathParams;
}


export class PremiumNewsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  news?: any[];

  @Metadata()
  statusCode: number;
}
