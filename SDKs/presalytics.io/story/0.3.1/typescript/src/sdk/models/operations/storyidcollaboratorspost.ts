import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class StoryIdCollaboratorsPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdCollaboratorsPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: StoryIdCollaboratorsPostPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: any;
}


export class StoryIdCollaboratorsPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  storyCollaborator?: shared.StoryCollaborator;
}
