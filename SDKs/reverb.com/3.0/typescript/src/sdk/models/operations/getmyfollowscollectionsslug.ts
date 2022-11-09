import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyFollowsCollectionsSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetMyFollowsCollectionsSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFollowsCollectionsSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyFollowsCollectionsSlugPathParams;

  @Metadata()
  security: GetMyFollowsCollectionsSlugSecurity;
}


export class GetMyFollowsCollectionsSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
