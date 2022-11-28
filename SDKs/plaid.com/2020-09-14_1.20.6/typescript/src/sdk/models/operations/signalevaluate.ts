import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SignalEvaluateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, any>;
}


export class SignalEvaluateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  error?: Map<string, any>;

  @SpeakeasyMetadata()
  signalEvaluateResponse?: Map<string, any>;

  @SpeakeasyMetadata()
  statusCode: number;
}
