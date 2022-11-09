import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubmitAnswersPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=group_id" })
  groupId: string;
}


export class SubmitAnswersRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SubmitAnswersPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: Map<string, string>;
}


export class SubmitAnswersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  group?: shared.Group;

  @Metadata()
  statusCode: number;
}
