import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEENTITY_SERVERS = [
	"https://verify.twilio.com",
];



export class CreateEntityPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=ServiceSid" })
  serviceSid: string;
}


export class CreateEntityCreateEntityRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Identity;" })
  identity: string;
}


export class CreateEntitySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateEntityRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateEntityPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateEntityCreateEntityRequest;

  @Metadata()
  security: CreateEntitySecurity;
}


export class CreateEntityResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2ServiceEntity?: shared.VerifyV2ServiceEntity;
}
