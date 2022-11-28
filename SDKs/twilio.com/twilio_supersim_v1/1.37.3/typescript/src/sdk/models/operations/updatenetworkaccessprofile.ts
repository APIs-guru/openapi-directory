import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateNetworkAccessProfileServerList = [
	"https://supersim.twilio.com",
] as const;


export class UpdateNetworkAccessProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateNetworkAccessProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateNetworkAccessProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateNetworkAccessProfilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateNetworkAccessProfileUpdateNetworkAccessProfileRequest;

  @SpeakeasyMetadata()
  security: UpdateNetworkAccessProfileSecurity;
}


export class UpdateNetworkAccessProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1NetworkAccessProfile?: shared.SupersimV1NetworkAccessProfile;
}
