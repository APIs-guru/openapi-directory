import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateNetworkAccessProfileServerList = [
	"https://supersim.twilio.com",
] as const;


export class CreateNetworkAccessProfileCreateNetworkAccessProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Networks;" })
  networks?: string[];

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateNetworkAccessProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateNetworkAccessProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateNetworkAccessProfileCreateNetworkAccessProfileRequest;

  @SpeakeasyMetadata()
  security: CreateNetworkAccessProfileSecurity;
}


export class CreateNetworkAccessProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
