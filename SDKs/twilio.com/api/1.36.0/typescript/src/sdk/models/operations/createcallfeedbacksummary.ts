import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export const CREATECALLFEEDBACKSUMMARY_SERVERS = [
	"https://api.twilio.com",
];



export class CreateCallFeedbackSummaryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum {
    Head = "HEAD"
,    Get = "GET"
,    Post = "POST"
,    Patch = "PATCH"
,    Put = "PUT"
,    Delete = "DELETE"
}


export class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest extends SpeakeasyBase {
  @Metadata({ data: "form, name=EndDate;" })
  endDate: Date;

  @Metadata({ data: "form, name=IncludeSubaccounts;" })
  includeSubaccounts?: boolean;

  @Metadata({ data: "form, name=StartDate;" })
  startDate: Date;

  @Metadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @Metadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum;
}


export class CreateCallFeedbackSummarySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCallFeedbackSummaryRequest extends SpeakeasyBase {
  @Metadata()
  serverUrl?: string;

  @Metadata()
  pathParams: CreateCallFeedbackSummaryPathParams;

  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest;

  @Metadata()
  security: CreateCallFeedbackSummarySecurity;
}


export class CreateCallFeedbackSummaryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  apiV2010AccountCallCallFeedbackSummary?: shared.ApiV2010AccountCallCallFeedbackSummary;
}
