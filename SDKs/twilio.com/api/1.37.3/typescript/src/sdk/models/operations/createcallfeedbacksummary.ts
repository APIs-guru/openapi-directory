import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";

export const CreateCallFeedbackSummaryServerList = [
	"https://api.twilio.com",
] as const;


export class CreateCallFeedbackSummaryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=AccountSid" })
  accountSid: string;
}

export enum CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum {
    Head = "HEAD",
    Get = "GET",
    Post = "POST",
    Patch = "PATCH",
    Put = "PUT",
    Delete = "DELETE"
}


export class CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=EndDate;" })
  endDate: Date;

  @SpeakeasyMetadata({ data: "form, name=IncludeSubaccounts;" })
  includeSubaccounts?: boolean;

  @SpeakeasyMetadata({ data: "form, name=StartDate;" })
  startDate: Date;

  @SpeakeasyMetadata({ data: "form, name=StatusCallback;" })
  statusCallback?: string;

  @SpeakeasyMetadata({ data: "form, name=StatusCallbackMethod;" })
  statusCallbackMethod?: CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequestStatusCallbackMethodEnum;
}


export class CreateCallFeedbackSummarySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=basic" })
  accountSidAuthToken: shared.SchemeAccountSidAuthToken;
}


export class CreateCallFeedbackSummaryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  serverUrl?: string;

  @SpeakeasyMetadata()
  pathParams: CreateCallFeedbackSummaryPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateCallFeedbackSummaryCreateCallFeedbackSummaryRequest;

  @SpeakeasyMetadata()
  security: CreateCallFeedbackSummarySecurity;
}


export class CreateCallFeedbackSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  apiV2010AccountCallCallFeedbackSummary?: shared.ApiV2010AccountCallCallFeedbackSummary;
}
