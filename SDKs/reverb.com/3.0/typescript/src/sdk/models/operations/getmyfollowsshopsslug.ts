import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyFollowsShopsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetMyFollowsShopsSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFollowsShopsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyFollowsShopsSlugPathParams;

  @SpeakeasyMetadata()
  security: GetMyFollowsShopsSlugSecurity;
}


export class GetMyFollowsShopsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
