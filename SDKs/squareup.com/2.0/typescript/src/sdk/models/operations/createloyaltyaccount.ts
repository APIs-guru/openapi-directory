import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLoyaltyAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateLoyaltyAccountRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.CreateLoyaltyAccountRequest;

  @Metadata()
  security: CreateLoyaltyAccountSecurity;
}


export class CreateLoyaltyAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  createLoyaltyAccountResponse?: shared.CreateLoyaltyAccountResponse;

  @Metadata()
  statusCode: number;
}
