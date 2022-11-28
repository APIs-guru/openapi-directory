import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const FetchVerificationAttemptsSummaryServerList = [
	"https://verify.twilio.com",
] as const;


export class FetchVerificationAttemptsSummaryQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Channel" })
  channel?: shared.VerificationAttemptsSummaryEnumChannelsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=Country" })
  country?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedAfter" })
  dateCreatedAfter?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DateCreatedBefore" })
  dateCreatedBefore?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=DestinationPrefix" })
  destinationPrefix?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=VerifyServiceSid" })
  verifyServiceSid?: string;
}


export class FetchVerificationAttemptsSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class FetchVerificationAttemptsSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  queryParams: FetchVerificationAttemptsSummaryQueryParams;

  @SpeakeasyMetadata()
  security: FetchVerificationAttemptsSummarySecurity;
}


export class FetchVerificationAttemptsSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  verifyV2VerificationAttemptsSummary?: shared.VerifyV2VerificationAttemptsSummary;
}
