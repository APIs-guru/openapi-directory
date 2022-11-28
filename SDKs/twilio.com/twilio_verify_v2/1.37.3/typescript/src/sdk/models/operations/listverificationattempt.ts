import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const ListVerificationAttemptServerList = [
	"https://verify.twilio.com",
] as const;


export class ListVerificationAttemptQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Channel" })
  channel?: shared.VerificationAttemptEnumChannelsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ChannelData.To" })
  channelDataTo?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.VerificationAttemptEnumConversionStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VerificationSid" })
  verificationSid?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VerifyServiceSid" })
  verifyServiceSid?: string;
}


export class ListVerificationAttemptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListVerificationAttemptListVerificationAttemptResponseMeta extends SpeakeasyBase {
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


export class ListVerificationAttemptListVerificationAttemptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attempts", elemType: shared.VerifyV2VerificationAttempt })
  attempts?: shared.VerifyV2VerificationAttempt[];

  @SpeakeasyMetadata({ data: "json, name=meta" })
  meta?: ListVerificationAttemptListVerificationAttemptResponseMeta;
}


export class ListVerificationAttemptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: ListVerificationAttemptQueryParams;

  @SpeakeasyMetadata()
  security: ListVerificationAttemptSecurity;
}


export class ListVerificationAttemptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  listVerificationAttemptResponse?: ListVerificationAttemptListVerificationAttemptResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
