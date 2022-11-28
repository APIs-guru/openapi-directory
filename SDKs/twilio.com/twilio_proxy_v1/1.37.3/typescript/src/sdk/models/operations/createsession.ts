import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSessionServerList = [
	"https://proxy.twilio.com",
] as const;


export class CreateSessionPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSessionCreateSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=DateExpiry;" })
  dateExpiry?: Date;

  @SpeakeasyMetadata({ data: "form, name=Mode;" })
  mode?: shared.SessionEnumModeEnum;

  @SpeakeasyMetadata({ data: "form, name=Participants;" })
  participants?: any[];

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.SessionEnumStatusEnum;

  @SpeakeasyMetadata({ data: "form, name=Ttl;" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSessionSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSessionRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateSessionPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSessionCreateSessionRequest;

  @SpeakeasyMetadata()
  security: CreateSessionSecurity;
}


export class CreateSessionResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  proxyV1ServiceSession?: shared.ProxyV1ServiceSession;
}
