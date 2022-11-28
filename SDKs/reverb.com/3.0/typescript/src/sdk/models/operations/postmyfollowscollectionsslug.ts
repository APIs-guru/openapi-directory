import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyFollowsCollectionsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class PostMyFollowsCollectionsSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsCollectionsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyFollowsCollectionsSlugPathParams;

  @SpeakeasyMetadata()
  security: PostMyFollowsCollectionsSlugSecurity;
}


export class PostMyFollowsCollectionsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
