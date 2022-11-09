import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubmitUserFeedbackPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class SubmitUserFeedbackRequestBody extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=category" })
  category?: string;

  @Metadata({ data: "multipart_form, name=content" })
  content?: string;

  @Metadata({ data: "multipart_form, name=positive" })
  positive: number;
}


export class SubmitUserFeedbackRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SubmitUserFeedbackPathParams;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  request: SubmitUserFeedbackRequestBody;
}


export class SubmitUserFeedback200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=feedback" })
  feedback?: shared.Feedback;

  @Metadata({ data: "json, name=user" })
  user?: shared.User;
}


export class SubmitUserFeedbackResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  submitUserFeedback200ApplicationJsonObject?: SubmitUserFeedback200ApplicationJson;
}
