import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchUserBindingServerList = [
	"https://ip-messaging.twilio.com",
] as const;


export class FetchUserBindingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=UserSid" })
  userSid: string;
}


export class FetchUserBindingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchUserBindingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: FetchUserBindingPathParams;

  @SpeakeasyMetadata()
  security: FetchUserBindingSecurity;
}


export class FetchUserBindingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  ipMessagingV2ServiceUserUserBinding?: shared.IpMessagingV2ServiceUserUserBinding;
}
