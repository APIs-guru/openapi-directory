import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SignalReturnReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.SignalReturnReportRequest;
}


export class SignalReturnReportResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  signalReturnReportResponse?: shared.SignalReturnReportResponse;

  @SpeakeasyMetadata()
  statusCode: number;
}
