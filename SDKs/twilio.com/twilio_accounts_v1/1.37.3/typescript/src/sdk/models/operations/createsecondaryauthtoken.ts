import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSecondaryAuthTokenServerList = [
	"https://accounts.twilio.com",
] as const;


export class CreateSecondaryAuthTokenSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSecondaryAuthTokenRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  security: CreateSecondaryAuthTokenSecurity;
}


export class CreateSecondaryAuthTokenResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountsV1SecondaryAuthToken?: shared.AccountsV1SecondaryAuthToken;
}
