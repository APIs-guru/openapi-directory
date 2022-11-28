import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteProjectPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class DeleteProjectQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=should_delete_clips" })
  shouldDeleteClips?: boolean;
}


export class DeleteProjectSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteProjectRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProjectPathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteProjectQueryParams;

  @SpeakeasyMetadata()
  security: DeleteProjectSecurity;
}


export class DeleteProjectResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
