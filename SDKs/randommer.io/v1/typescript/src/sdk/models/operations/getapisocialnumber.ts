import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetApiSocialNumberHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=X-Api-Key" })
  xApiKey?: string;
}


export class GetApiSocialNumberRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  headers: GetApiSocialNumberHeaders;
}


export class GetApiSocialNumberResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
