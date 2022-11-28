import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateSimServerList = [
	"https://supersim.twilio.com",
] as const;


export class CreateSimCreateSimRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=Iccid;" })
  iccid: string;

  @SpeakeasyMetadata({ data: "form, name=RegistrationCode;" })
  registrationCode: string;
}


export class CreateSimSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSimRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSimCreateSimRequest;

  @SpeakeasyMetadata()
  security: CreateSimSecurity;
}


export class CreateSimResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  supersimV1Sim?: shared.SupersimV1Sim;
}
