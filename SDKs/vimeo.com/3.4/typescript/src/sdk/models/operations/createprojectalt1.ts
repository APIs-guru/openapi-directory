import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateProjectAlt1RequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}


export class CreateProjectAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class CreateProjectAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateProjectAlt1RequestBody;

  @SpeakeasyMetadata()
  security: CreateProjectAlt1Security;
}


export class CreateProjectAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;

  @SpeakeasyMetadata()
  project?: shared.Project;
}
