import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class EditProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class EditProjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EditProjectPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: EditProjectRequestBody;

  @Metadata()
  security: EditProjectSecurity;
}


export class EditProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  project?: shared.Project;
}
