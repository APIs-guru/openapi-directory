import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteMyFollowsCollectionsSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class DeleteMyFollowsCollectionsSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsCollectionsSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMyFollowsCollectionsSlugPathParams;

  @Metadata()
  security: DeleteMyFollowsCollectionsSlugSecurity;
}


export class DeleteMyFollowsCollectionsSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
