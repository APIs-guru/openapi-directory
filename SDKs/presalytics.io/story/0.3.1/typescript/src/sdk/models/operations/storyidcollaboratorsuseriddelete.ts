import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdCollaboratorsUseridDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_collaborator_userid" })
  storyCollaboratorUserid: string;
}


export class StoryIdCollaboratorsUseridDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdCollaboratorsUseridDeletePathParams;
}


export class StoryIdCollaboratorsUseridDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
