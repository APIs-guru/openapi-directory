import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SignalDecisionReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SignalDecisionReportRequest;
}


export class SignalDecisionReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  signalDecisionReportResponse?: shared.SignalDecisionReportResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
