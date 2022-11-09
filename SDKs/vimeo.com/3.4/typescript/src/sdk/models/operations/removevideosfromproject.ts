import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveVideosFromProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class RemoveVideosFromProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=should_delete_clips" })
  shouldDeleteClips?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris: string;
}


export class RemoveVideosFromProjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RemoveVideosFromProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveVideosFromProjectPathParams;

  @Metadata()
  queryParams: RemoveVideosFromProjectQueryParams;

  @Metadata()
  security: RemoveVideosFromProjectSecurity;
}


export class RemoveVideosFromProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
