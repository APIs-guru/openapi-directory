import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubmitAnswersPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class SubmitAnswersRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubmitAnswersPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: Map<string, string>;
}


export class SubmitAnswersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  group?: shared.Group;

  @SpeakeasyMetadata()
  statusCode: number;
}
