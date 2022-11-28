import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteMyFollowsBrandsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class DeleteMyFollowsBrandsSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsBrandsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMyFollowsBrandsSlugPathParams;

  @SpeakeasyMetadata()
  security: DeleteMyFollowsBrandsSlugSecurity;
}


export class DeleteMyFollowsBrandsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
