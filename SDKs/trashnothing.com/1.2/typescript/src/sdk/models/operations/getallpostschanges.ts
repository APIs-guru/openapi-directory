import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllPostsChangesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=date_max" })
  dateMax: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=date_min" })
  dateMin: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=per_page" })
  perPage?: number;
}


export class GetAllPostsChangesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class GetAllPostsChangesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class GetAllPostsChangesSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetAllPostsChangesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetAllPostsChangesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetAllPostsChangesSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetAllPostsChangesSecurityOption3;
}


export class GetAllPostsChangesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetAllPostsChangesQueryParams;

  @Metadata()
  security: GetAllPostsChangesSecurity;
}


export class GetAllPostsChanges200ApplicationJsonChanges extends SpeakeasyBase {
  @Metadata({ data: "json, name=date" })
  date?: Date;

  @Metadata({ data: "json, name=post_id" })
  postId?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}


export class GetAllPostsChanges200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=changes", elemType: operations.GetAllPostsChanges200ApplicationJsonChanges })
  changes?: GetAllPostsChanges200ApplicationJsonChanges[];
}


export class GetAllPostsChangesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAllPostsChanges200ApplicationJsonObject?: GetAllPostsChanges200ApplicationJson;
}
