import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHFORM_SERVERS = [
	"https://verify.twilio.com",
];



export class FetchFormPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=FormType" })
  formType: shared.FormEnumFormTypesEnum;
}


export class FetchFormSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchFormRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: FetchFormPathParams;

  @Metadata()
  security: FetchFormSecurity;
}


export class FetchFormResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2Form?: shared.VerifyV2Form;
}
