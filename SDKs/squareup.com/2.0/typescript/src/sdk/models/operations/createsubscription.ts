import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateSubscriptionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateSubscriptionRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateSubscriptionRequest;

  @Metadata()
  security: CreateSubscriptionSecurity;
}


export class CreateSubscriptionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createSubscriptionResponse?: shared.CreateSubscriptionResponse;

  @Metadata()
  statusCode: number;
}
