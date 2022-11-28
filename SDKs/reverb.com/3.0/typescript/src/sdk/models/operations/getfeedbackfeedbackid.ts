import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetFeedbackFeedbackIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=feedback_id" })
  feedbackId: string;
}


export class GetFeedbackFeedbackIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetFeedbackFeedbackIdPathParams;
}


export class GetFeedbackFeedbackIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
