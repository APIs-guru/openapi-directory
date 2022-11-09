import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class StoryIdCollaboratorsPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class StoryIdCollaboratorsPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: StoryIdCollaboratorsPostPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;
}


export class StoryIdCollaboratorsPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  storyCollaborator?: shared.StoryCollaborator;
}
