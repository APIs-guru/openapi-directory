import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const UpdateSimServerList = [
	"https://supersim.twilio.com",
] as const;


export class UpdateSimPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=Sid" })
  sid: string;
}

export enum UpdateSimUpdateSimRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class UpdateSimUpdateSimRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=AccountSid;" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: UpdateSimUpdateSimRequestCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Fleet;" })
  fleet?: string;

  @SpeakeasyMetadata({ data: "form, name=Status;" })
  status?: shared.SimEnumStatusUpdateEnum;

  @SpeakeasyMetadata({ data: "form, name=UniqueName;" })
  uniqueName?: string;
}


export class UpdateSimSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class UpdateSimRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: UpdateSimPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: UpdateSimUpdateSimRequest;

  @SpeakeasyMetadata()
  security: UpdateSimSecurity;
}


export class UpdateSimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1Sim?: shared.SupersimV1Sim;
}
