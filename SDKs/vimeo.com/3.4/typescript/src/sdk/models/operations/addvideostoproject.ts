import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideosToProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class AddVideosToProjectQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris: string;
}


export class AddVideosToProjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideosToProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideosToProjectPathParams;

  @Metadata()
  queryParams: AddVideosToProjectQueryParams;

  @Metadata()
  security: AddVideosToProjectSecurity;
}


export class AddVideosToProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
