import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteMyFollowsCollectionsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class DeleteMyFollowsCollectionsSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsCollectionsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMyFollowsCollectionsSlugPathParams;

  @SpeakeasyMetadata()
  security: DeleteMyFollowsCollectionsSlugSecurity;
}


export class DeleteMyFollowsCollectionsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
