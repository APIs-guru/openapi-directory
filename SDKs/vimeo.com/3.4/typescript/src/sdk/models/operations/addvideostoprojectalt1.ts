import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class AddVideosToProjectAlt1PathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=project_id" })
  projectId: number;
}


export class AddVideosToProjectAlt1QueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=uris" })
  uris: string;
}


export class AddVideosToProjectAlt1Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class AddVideosToProjectAlt1Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: AddVideosToProjectAlt1PathParams;

  @SpeakeasyMetadata()
  queryParams: AddVideosToProjectAlt1QueryParams;

  @SpeakeasyMetadata()
  security: AddVideosToProjectAlt1Security;
}


export class AddVideosToProjectAlt1Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  error?: shared.Error;
}
