import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTTOLLFREEVERIFICATION_SERVERS = [
	"https://messaging.twilio.com",
];



export class ListTollfreeVerificationQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.TollfreeVerificationEnumStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TollfreePhoneNumberSid" })
  tollfreePhoneNumberSid?: string;
}


export class ListTollfreeVerificationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTollfreeVerificationRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListTollfreeVerificationQueryParams;

  @Metadata()
  security: ListTollfreeVerificationSecurity;
}


export class ListTollfreeVerificationListTollfreeVerificationResponseMeta extends SpeakeasyBase {
  @Metadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @Metadata({ data: "json, name=key" })
  key?: string;

  @Metadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=page_size" })
  pageSize?: number;

  @Metadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}


export class ListTollfreeVerificationListTollfreeVerificationResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=meta" })
  meta?: ListTollfreeVerificationListTollfreeVerificationResponseMeta;

  @Metadata({ data: "json, name=verifications", elemType: shared.MessagingV1TollfreeVerification })
  verifications?: shared.MessagingV1TollfreeVerification[];
}


export class ListTollfreeVerificationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listTollfreeVerificationResponse?: ListTollfreeVerificationListTollfreeVerificationResponse;

  @Metadata()
  statusCode: number;
}
