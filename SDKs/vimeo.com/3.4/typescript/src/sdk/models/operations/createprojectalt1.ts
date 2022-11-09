import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateProjectAlt1RequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name: string;
}


export class CreateProjectAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateProjectAlt1Request extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: CreateProjectAlt1RequestBody;

  @Metadata()
  security: CreateProjectAlt1Security;
}


export class CreateProjectAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;

  @Metadata()
  project?: shared.Project;
}
