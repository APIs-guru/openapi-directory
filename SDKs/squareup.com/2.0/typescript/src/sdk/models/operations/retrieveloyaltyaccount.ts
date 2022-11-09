import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RetrieveLoyaltyAccountPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=account_id" })
  accountId: string;
}


export class RetrieveLoyaltyAccountSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RetrieveLoyaltyAccountRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RetrieveLoyaltyAccountPathParams;

  @Metadata()
  security: RetrieveLoyaltyAccountSecurity;
}


export class RetrieveLoyaltyAccountResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  retrieveLoyaltyAccountResponse?: shared.RetrieveLoyaltyAccountResponse;

  @Metadata()
  statusCode: number;
}
