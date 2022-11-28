import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RemoveVideosFromProjectAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class RemoveVideosFromProjectAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=should_delete_clips" })
  shouldDeleteClips?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris: string;
}


export class RemoveVideosFromProjectAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RemoveVideosFromProjectAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RemoveVideosFromProjectAlt1PathParams;

  @SpeakeasyMetadata()
  queryParams: RemoveVideosFromProjectAlt1QueryParams;

  @SpeakeasyMetadata()
  security: RemoveVideosFromProjectAlt1Security;
}


export class RemoveVideosFromProjectAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
