import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateCheckoutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=location_id" })
  locationId: string;
}


export class CreateCheckoutSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateCheckoutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateCheckoutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateCheckoutRequest;

  @Metadata()
  security: CreateCheckoutSecurity;
}


export class CreateCheckoutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createCheckoutResponse?: shared.CreateCheckoutResponse;

  @Metadata()
  statusCode: number;
}
