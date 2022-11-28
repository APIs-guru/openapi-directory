import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteMyFollowsShopsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class DeleteMyFollowsShopsSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsShopsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMyFollowsShopsSlugPathParams;

  @SpeakeasyMetadata()
  security: DeleteMyFollowsShopsSlugSecurity;
}


export class DeleteMyFollowsShopsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
