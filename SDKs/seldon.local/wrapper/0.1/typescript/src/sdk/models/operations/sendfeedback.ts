import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SendFeedbackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=json;json=true" })
  json?: shared.Feedback;
}


export class SendFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: SendFeedbackRequestBody;
}


export class SendFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  seldonMessage?: shared.SeldonMessage;

  @SpeakeasyMetadata()
  statusCode: number;
}
