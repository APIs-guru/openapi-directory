import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdCollaboratorsUseridDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=story_collaborator_userid" })
  storyCollaboratorUserid: string;
}


export class StoryIdCollaboratorsUseridDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdCollaboratorsUseridDeletePathParams;
}


export class StoryIdCollaboratorsUseridDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
