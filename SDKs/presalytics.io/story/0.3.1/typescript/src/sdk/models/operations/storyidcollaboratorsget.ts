import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdCollaboratorsGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdCollaboratorsGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdCollaboratorsGetPathParams;
}


export class StoryIdCollaboratorsGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata({ elemType: shared.StoryCollaborator })
  storyCollaborators?: shared.StoryCollaborator[];
}
