import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetApiSocialNumberHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiSocialNumberRequest extends SpeakeasyBase {
  @Metadata()
  headers: GetApiSocialNumberHeaders;
}


export class GetApiSocialNumberResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
