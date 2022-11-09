import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const UPDATESIM_SERVERS = [
	"https://supersim.twilio.com",
];



export class UpdateSimPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateSimUpdateSimRequestCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class UpdateSimUpdateSimRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=AccountSid;" })
  accountSid?: string;

  @Metadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: UpdateSimUpdateSimRequestCallbackMethodEnum;

  @Metadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @Metadata({ data: "form, name=Fleet;" })
  fleet?: string;

  @Metadata({ data: "form, name=Status;" })
  status?: shared.SimEnumStatusUpdateEnum;

  @Metadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateSimSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSimRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: UpdateSimPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSimUpdateSimRequest;

  @Metadata()
  security: UpdateSimSecurity;
}


export class UpdateSimResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1Sim?: shared.SupersimV1Sim;
}
