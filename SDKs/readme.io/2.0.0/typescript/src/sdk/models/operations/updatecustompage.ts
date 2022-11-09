import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateCustomPagePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class UpdateCustomPageSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateCustomPageRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateCustomPagePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CustomPage;

  @Metadata()
  security: UpdateCustomPageSecurity;
}


export class UpdateCustomPageResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
