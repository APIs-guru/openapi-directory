import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetFeedbackFeedbackIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=feedback_id" })
  feedbackId: string;
}


export class GetFeedbackFeedbackIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetFeedbackFeedbackIdPathParams;
}


export class GetFeedbackFeedbackIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
