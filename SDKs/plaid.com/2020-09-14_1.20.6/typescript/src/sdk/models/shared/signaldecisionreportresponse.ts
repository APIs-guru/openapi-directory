import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignalDecisionReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=request_id" })
  requestId: string;
}
