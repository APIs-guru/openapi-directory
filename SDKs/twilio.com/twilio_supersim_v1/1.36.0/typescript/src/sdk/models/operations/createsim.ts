import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATESIM_SERVERS = [
	"https://supersim.twilio.com",
];



export class CreateSimCreateSimRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=Iccid;" })
  iccid: string;

  @Metadata({ data: "form, name=RegistrationCode;" })
  registrationCode: string;
}


export class CreateSimSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateSimRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateSimCreateSimRequest;

  @Metadata()
  security: CreateSimSecurity;
}


export class CreateSimResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  supersimV1Sim?: shared.SupersimV1Sim;
}
