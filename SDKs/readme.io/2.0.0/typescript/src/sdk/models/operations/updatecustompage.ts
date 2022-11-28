import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UpdateCustomPagePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class UpdateCustomPageSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  apiKey: shared.SchemeApiKey;
}


export class UpdateCustomPageRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateCustomPagePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.CustomPage;

  @SpeakeasyMetadata()
  security: UpdateCustomPageSecurity;
}


export class UpdateCustomPageResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
