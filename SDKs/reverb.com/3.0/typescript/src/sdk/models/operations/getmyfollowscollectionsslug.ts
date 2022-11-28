import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyFollowsCollectionsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetMyFollowsCollectionsSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFollowsCollectionsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyFollowsCollectionsSlugPathParams;

  @SpeakeasyMetadata()
  security: GetMyFollowsCollectionsSlugSecurity;
}


export class GetMyFollowsCollectionsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
