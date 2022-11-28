import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryIdCollaboratorsUseridGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_collaborator_userid" })
  storyCollaboratorUserid: string;
}


export class StoryIdCollaboratorsUseridGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdCollaboratorsUseridGetPathParams;
}


export class StoryIdCollaboratorsUseridGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  storyCollaborator?: shared.StoryCollaborator;
}
