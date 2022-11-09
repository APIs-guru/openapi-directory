import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyFollowsBrandsSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class PostMyFollowsBrandsSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsBrandsSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyFollowsBrandsSlugPathParams;

  @Metadata()
  security: PostMyFollowsBrandsSlugSecurity;
}


export class PostMyFollowsBrandsSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
