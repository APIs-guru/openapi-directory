import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateChangelogPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class UpdateChangelogSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateChangelogRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateChangelogPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.Changelog;

  @SpeakeasyMetadata()
  security: UpdateChangelogSecurity;
}


export class UpdateChangelogResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
