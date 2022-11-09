import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const FETCHVERIFICATIONATTEMPTSSUMMARY_SERVERS = [
	"https://verify.twilio.com",
];



export class FetchVerificationAttemptsSummaryQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=Channel" })
  channel?: shared.VerificationAttemptsSummaryEnumChannelsEnum;

  @Metadata({ data: "queryParam, style=form;explode=true;name=Country" })
  country?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=DestinationPrefix" })
  destinationPrefix?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=VerifyServiceSid" })
  verifyServiceSid?: string;
}


export class FetchVerificationAttemptsSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchVerificationAttemptsSummaryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  queryParams: FetchVerificationAttemptsSummaryQueryParams;

  @Metadata()
  security: FetchVerificationAttemptsSummarySecurity;
}


export class FetchVerificationAttemptsSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  verifyV2VerificationAttemptsSummary?: shared.VerifyV2VerificationAttemptsSummary;
}
