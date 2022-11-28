import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllPostsChangesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_max" })
  dateMax: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=date_min" })
  dateMin: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetAllPostsChangesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: shared.SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: shared.SchemeOauth2Code;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey?: shared.SchemeApiKey;
}


export class GetAllPostsChanges200ApplicationJsonChanges extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=date" })
  date?: Date;

  @SpeakeasyMetadata({ data: "json, name=post_id" })
  postId?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}


export class GetAllPostsChanges200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changes", elemType: GetAllPostsChanges200ApplicationJsonChanges })
  changes?: GetAllPostsChanges200ApplicationJsonChanges[];
}


export class GetAllPostsChangesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetAllPostsChangesQueryParams;

  @SpeakeasyMetadata()
  security: GetAllPostsChangesSecurity;
}


export class GetAllPostsChangesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllPostsChanges200ApplicationJsonObject?: GetAllPostsChanges200ApplicationJson;
}
