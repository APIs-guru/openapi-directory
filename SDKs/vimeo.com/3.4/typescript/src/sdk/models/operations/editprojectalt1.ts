import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EditProjectAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class EditProjectAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class EditProjectAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditProjectAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: EditProjectAlt1PathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: EditProjectAlt1RequestBody;

  @Metadata()
  security: EditProjectAlt1Security;
}


export class EditProjectAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  project?: shared.Project;
}
