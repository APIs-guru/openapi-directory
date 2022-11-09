import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SignalEvaluateRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class SignalEvaluateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  error?: Map<string, any>;

  @Metadata()
  signalEvaluateResponse?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
