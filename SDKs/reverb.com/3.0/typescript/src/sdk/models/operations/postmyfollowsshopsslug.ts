import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyFollowsShopsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class PostMyFollowsShopsSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsShopsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyFollowsShopsSlugPathParams;

  @SpeakeasyMetadata()
  security: PostMyFollowsShopsSlugSecurity;
}


export class PostMyFollowsShopsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
