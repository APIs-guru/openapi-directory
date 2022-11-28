import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryIdCollaboratorsGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdCollaboratorsGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdCollaboratorsGetPathParams;
}


export class StoryIdCollaboratorsGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata({ elemType: shared.StoryCollaborator })
  storyCollaborators?: shared.StoryCollaborator[];
}
