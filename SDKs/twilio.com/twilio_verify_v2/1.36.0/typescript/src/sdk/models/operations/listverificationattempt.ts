import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const LISTVERIFICATIONATTEMPT_SERVERS = [
	"https://verify.twilio.com",
];



export class ListVerificationAttemptQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Channel" })
  channel?: shared.VerificationAttemptEnumChannelsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=ChannelData.To" })
  channelDataTo?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PageSize" })
  pageSize?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Status" })
  status?: shared.VerificationAttemptEnumConversionStatusEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VerificationSid" })
  verificationSid?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VerifyServiceSid" })
  verifyServiceSid?: string;
}


export class ListVerificationAttemptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class ListVerificationAttemptRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: ListVerificationAttemptQueryParams;

  @Metadata()
  security: ListVerificationAttemptSecurity;
}


export class ListVerificationAttemptListVerificationAttemptResponseMeta extends SpeakeasyBase {
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


export class ListVerificationAttemptListVerificationAttemptResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=attempts", elemType: shared.VerifyV2VerificationAttempt })
  attempts?: shared.VerifyV2VerificationAttempt[];

  @Metadata({ data: "json, name=meta" })
  meta?: ListVerificationAttemptListVerificationAttemptResponseMeta;
}


export class ListVerificationAttemptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listVerificationAttemptResponse?: ListVerificationAttemptListVerificationAttemptResponse;

  @Metadata()
  statusCode: number;
}
