import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SendFeedbackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=message" })
  message: string;

  @Metadata({ data: "multipart_form, name=meta" })
  meta?: string;

  @Metadata({ data: "multipart_form, name=subject" })
  subject: string;
}


export class SendFeedbackRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: SendFeedbackRequestBody;
}


export class SendFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
