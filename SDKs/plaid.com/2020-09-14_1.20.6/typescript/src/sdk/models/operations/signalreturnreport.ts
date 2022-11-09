import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SignalReturnReportRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.SignalReturnReportRequest;
}


export class SignalReturnReportResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  signalReturnReportResponse?: shared.SignalReturnReportResponse;

  @Metadata()
  statusCode: number;
}
