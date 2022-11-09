import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VenuesFormatEnum {
    Xml = "xml"
,    Json = "json"
}


export class VenuesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=format" })
  format: VenuesFormatEnum;
}


export class VenuesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: VenuesPathParams;
}


export class VenuesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  venues?: any[];
}
