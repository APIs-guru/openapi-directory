import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdCollaboratorsInactivePostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdCollaboratorsInactivePostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdCollaboratorsInactivePostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class StoryIdCollaboratorsInactivePostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  storyCollaborator?: shared.StoryCollaborator;
}
