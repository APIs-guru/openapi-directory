import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProjectPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=user_id" })
  userId: number;
}


export class CreateProjectRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class CreateProjectSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateProjectRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateProjectPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProjectRequestBody;

  @Metadata()
  security: CreateProjectSecurity;
}


export class CreateProjectResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  project?: shared.Project;
}
