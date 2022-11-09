import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESESSION_SERVERS = [
	"https://proxy.twilio.com",
];



export class UpdateSessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}


export class UpdateSessionUpdateSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DateExpiry;" })
  dateExpiry?: Date;

  @Metadata({ data: "form, name=FailOnParticipantConflict;" })
  failOnParticipantConflict?: boolean;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.SessionEnumStatusEnum;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;
}


export class UpdateSessionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSessionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSessionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSessionUpdateSessionRequest;

  @Metadata()
  security: UpdateSessionSecurity;
}


export class UpdateSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  proxyV1ServiceSession?: shared.ProxyV1ServiceSession;
}
