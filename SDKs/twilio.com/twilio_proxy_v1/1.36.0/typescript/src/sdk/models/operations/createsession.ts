import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESESSION_SERVERS = [
	"https://proxy.twilio.com",
];



export class CreateSessionPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateSessionCreateSessionRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=DateExpiry;" })
  dateExpiry?: Date;

  @Metadata({ data: "form, name=FailOnParticipantConflict;" })
  failOnParticipantConflict?: boolean;

  @Metadata({ data: "form, name=Mode;" })
  mode?: shared.SessionEnumModeEnum;

  @Metadata({ data: "form, name=Participants;" })
  participants?: any[];

  @Metadata({ data: "form, name=Status;" })
  status?: shared.SessionEnumStatusEnum;

  @Metadata({ data: "form, name=Ttl;" })
  ttl?: number;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class CreateSessionSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSessionRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateSessionPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSessionCreateSessionRequest;

  @Metadata()
  security: CreateSessionSecurity;
}


export class CreateSessionResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  proxyV1ServiceSession?: shared.ProxyV1ServiceSession;
}
