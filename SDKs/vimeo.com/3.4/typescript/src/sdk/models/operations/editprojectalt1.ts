import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class EditProjectAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class EditProjectAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class EditProjectAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class EditProjectAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: EditProjectAlt1PathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: EditProjectAlt1RequestBody;

  @SpeakeasyMetadata()
  security: EditProjectAlt1Security;
}


export class EditProjectAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  project?: shared.Project;
}
