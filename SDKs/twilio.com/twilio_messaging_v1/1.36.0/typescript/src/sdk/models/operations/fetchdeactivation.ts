import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHDEACTIVATION_SERVERS = [
	"https://messaging.twilio.com",
];



export class FetchDeactivationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Date" })
  date?: Date;
}


export class FetchDeactivationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchDeactivationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: FetchDeactivationQueryParams;

  @Metadata()
  security: FetchDeactivationSecurity;
}


export class FetchDeactivationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  messagingV1Deactivation?: shared.MessagingV1Deactivation;
}
