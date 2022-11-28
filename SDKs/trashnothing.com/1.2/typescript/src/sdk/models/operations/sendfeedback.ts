import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SendFeedbackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=message" })
  message: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=meta" })
  meta?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=subject" })
  subject: string;
}


export class SendFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: SendFeedbackRequestBody;
}


export class SendFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
