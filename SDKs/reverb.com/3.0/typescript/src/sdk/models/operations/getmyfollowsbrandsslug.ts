import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyFollowsBrandsSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetMyFollowsBrandsSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFollowsBrandsSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyFollowsBrandsSlugPathParams;

  @Metadata()
  security: GetMyFollowsBrandsSlugSecurity;
}


export class GetMyFollowsBrandsSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
