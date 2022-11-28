import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPostsByIdsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=post_ids" })
  postIds: string;
}


export class GetPostsByIdsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: shared.SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: shared.SchemeOauth2Code;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey?: shared.SchemeApiKey;
}


export class GetPostsByIdsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPostsByIdsQueryParams;

  @SpeakeasyMetadata()
  security: GetPostsByIdsSecurity;
}


export class GetPostsByIdsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.Post })
  posts?: shared.Post[];

  @SpeakeasyMetadata()
  statusCode: number;
}
