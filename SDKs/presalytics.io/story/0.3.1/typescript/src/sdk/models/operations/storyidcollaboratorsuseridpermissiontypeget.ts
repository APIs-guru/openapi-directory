import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StoryIdCollaboratorsUseridPermissiontypeGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=permissiontype" })
  permissiontype: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=story_collaborator_userid" })
  storyCollaboratorUserid: string;
}


export class StoryIdCollaboratorsUseridPermissiontypeGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdCollaboratorsUseridPermissiontypeGetPathParams;
}


export class StoryIdCollaboratorsUseridPermissiontypeGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
