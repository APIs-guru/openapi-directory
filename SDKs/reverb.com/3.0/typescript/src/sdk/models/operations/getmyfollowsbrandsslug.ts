import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyFollowsBrandsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetMyFollowsBrandsSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFollowsBrandsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyFollowsBrandsSlugPathParams;

  @SpeakeasyMetadata()
  security: GetMyFollowsBrandsSlugSecurity;
}


export class GetMyFollowsBrandsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
