import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StoryIdCollaboratorsUseridPermissiontypeGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=permissiontype" })
  permissiontype: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=story_collaborator_userid" })
  storyCollaboratorUserid: string;
}


export class StoryIdCollaboratorsUseridPermissiontypeGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdCollaboratorsUseridPermissiontypeGetPathParams;
}


export class StoryIdCollaboratorsUseridPermissiontypeGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
