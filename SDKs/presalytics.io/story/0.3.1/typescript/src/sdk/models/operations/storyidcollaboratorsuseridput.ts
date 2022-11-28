import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryIdCollaboratorsUseridPutPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_collaborator_userid" })
  storyCollaboratorUserid: string;
}


export class StoryIdCollaboratorsUseridPutRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdCollaboratorsUseridPutPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: shared.StoryCollaborator;
}


export class StoryIdCollaboratorsUseridPutResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  storyCollaborator?: shared.StoryCollaborator;
}
