import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPostsByIdsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=post_ids" })
  postIds: string;
}


export class GetPostsByIdsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class GetPostsByIdsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class GetPostsByIdsSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetPostsByIdsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetPostsByIdsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetPostsByIdsSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetPostsByIdsSecurityOption3;
}


export class GetPostsByIdsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPostsByIdsQueryParams;

  @Metadata()
  security: GetPostsByIdsSecurity;
}


export class GetPostsByIdsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.Post })
  posts?: shared.Post[];

  @Metadata()
  statusCode: number;
}
