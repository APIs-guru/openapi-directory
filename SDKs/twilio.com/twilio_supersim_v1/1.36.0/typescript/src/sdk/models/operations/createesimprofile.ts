import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATEESIMPROFILE_SERVERS = [
	"https://supersim.twilio.com",
];


export enum CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateEsimProfileCreateEsimProfileRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=Eid;" })
  eid?: string;
}


export class CreateEsimProfileSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateEsimProfileRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateEsimProfileCreateEsimProfileRequest;

  @Metadata()
  security: CreateEsimProfileSecurity;
}


export class CreateEsimProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1EsimProfile?: shared.SupersimV1EsimProfile;
}
