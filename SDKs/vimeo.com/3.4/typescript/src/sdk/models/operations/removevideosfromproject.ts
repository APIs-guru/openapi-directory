import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveVideosFromProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class RemoveVideosFromProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=should_delete_clips" })
  shouldDeleteClips?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris: string;
}


export class RemoveVideosFromProjectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RemoveVideosFromProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveVideosFromProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveVideosFromProjectQueryParams;

  @SpeakeasyMetadata()
  security: RemoveVideosFromProjectSecurity;
}


export class RemoveVideosFromProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
