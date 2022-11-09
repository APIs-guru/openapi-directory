import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SendFeedbackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "form, name=json;json=true" })
  json?: shared.Feedback;
}


export class SendFeedbackRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request: SendFeedbackRequestBody;
}


export class SendFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  seldonMessage?: shared.SeldonMessage;

  @Metadata()
  statusCode: number;
}
