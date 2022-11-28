import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateEsimProfileServerList = [
	"https://supersim.twilio.com",
] as const;

export enum CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateEsimProfileCreateEsimProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=CallbackMethod;" })
  callbackMethod?: CreateEsimProfileCreateEsimProfileRequestCallbackMethodEnum;

  @SpeakeasyMetadata({ data: "form, name=CallbackUrl;" })
  callbackUrl?: string;

  @SpeakeasyMetadata({ data: "form, name=Eid;" })
  eid?: string;
}


export class CreateEsimProfileSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateEsimProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateEsimProfileCreateEsimProfileRequest;

  @SpeakeasyMetadata()
  security: CreateEsimProfileSecurity;
}


export class CreateEsimProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1EsimProfile?: shared.SupersimV1EsimProfile;
}
