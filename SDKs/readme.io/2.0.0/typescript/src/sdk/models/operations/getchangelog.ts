import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetChangelogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetChangelogSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class GetChangelogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetChangelogPathParams;

  @SpeakeasyMetadata()
  security: GetChangelogSecurity;
}


export class GetChangelogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
