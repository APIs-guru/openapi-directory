import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListTollfreeVerificationServerList = [
	"https://messaging.twilio.com",
] as const;


export class ListTollfreeVerificationQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.TollfreeVerificationEnumStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TollfreePhoneNumberSid" })
  tollfreePhoneNumberSid?: string;
}


export class ListTollfreeVerificationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListTollfreeVerificationListTollfreeVerificationResponseMeta extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=first_page_url" })
  firstPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_url" })
  nextPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=previous_page_url" })
  previousPageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}


export class ListTollfreeVerificationListTollfreeVerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListTollfreeVerificationListTollfreeVerificationResponseMeta;

  @SpeakeasyMetadata({ data: "json, name=verifications", elemType: shared.MessagingV1TollfreeVerification })
  verifications?: shared.MessagingV1TollfreeVerification[];
}


export class ListTollfreeVerificationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListTollfreeVerificationQueryParams;

  @SpeakeasyMetadata()
  security: ListTollfreeVerificationSecurity;
}


export class ListTollfreeVerificationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listTollfreeVerificationResponse?: ListTollfreeVerificationListTollfreeVerificationResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
