import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateChangelogPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class UpdateChangelogSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateChangelogRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateChangelogPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Changelog;

  @Metadata()
  security: UpdateChangelogSecurity;
}


export class UpdateChangelogResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
