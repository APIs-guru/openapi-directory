import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddVideosToProjectAlt1PathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class AddVideosToProjectAlt1QueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris: string;
}


export class AddVideosToProjectAlt1Security extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideosToProjectAlt1Request extends SpeakeasyBase {
  @Metadata()
  pathParams: AddVideosToProjectAlt1PathParams;

  @Metadata()
  queryParams: AddVideosToProjectAlt1QueryParams;

  @Metadata()
  security: AddVideosToProjectAlt1Security;
}


export class AddVideosToProjectAlt1Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  error?: shared.Error;
}
