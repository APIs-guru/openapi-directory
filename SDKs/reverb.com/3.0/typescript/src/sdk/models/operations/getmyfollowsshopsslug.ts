import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyFollowsShopsSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetMyFollowsShopsSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFollowsShopsSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyFollowsShopsSlugPathParams;

  @Metadata()
  security: GetMyFollowsShopsSlugSecurity;
}


export class GetMyFollowsShopsSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
