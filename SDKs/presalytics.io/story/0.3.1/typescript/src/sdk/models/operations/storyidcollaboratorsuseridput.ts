import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdCollaboratorsUseridPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=story_collaborator_userid" })
  storyCollaboratorUserid: string;
}


export class StoryIdCollaboratorsUseridPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdCollaboratorsUseridPutPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.StoryCollaborator;
}


export class StoryIdCollaboratorsUseridPutResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  storyCollaborator?: shared.StoryCollaborator;
}
