import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteProjectAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class DeleteProjectAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=should_delete_clips" })
  shouldDeleteClips?: boolean;
}


export class DeleteProjectAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteProjectAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteProjectAlt1PathParams;

  @SpeakeasyMetadata()
  queryParams: DeleteProjectAlt1QueryParams;

  @SpeakeasyMetadata()
  security: DeleteProjectAlt1Security;
}


export class DeleteProjectAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
