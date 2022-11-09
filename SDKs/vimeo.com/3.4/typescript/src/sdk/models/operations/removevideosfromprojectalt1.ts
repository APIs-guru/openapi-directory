import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveVideosFromProjectAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class RemoveVideosFromProjectAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=should_delete_clips" })
  shouldDeleteClips?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris: string;
}


export class RemoveVideosFromProjectAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class RemoveVideosFromProjectAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveVideosFromProjectAlt1PathParams;

  @Metadata()
  queryParams: RemoveVideosFromProjectAlt1QueryParams;

  @Metadata()
  security: RemoveVideosFromProjectAlt1Security;
}


export class RemoveVideosFromProjectAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
