import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubmitUserFeedbackPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: string;
}


export class SubmitUserFeedbackRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=category" })
  category?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=positive" })
  positive: number;
}


export class SubmitUserFeedback200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=feedback" })
  feedback?: shared.Feedback;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user?: shared.User;
}


export class SubmitUserFeedbackRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubmitUserFeedbackPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  request: SubmitUserFeedbackRequestBody;
}


export class SubmitUserFeedbackResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  submitUserFeedback200ApplicationJsonObject?: SubmitUserFeedback200ApplicationJson;
}
