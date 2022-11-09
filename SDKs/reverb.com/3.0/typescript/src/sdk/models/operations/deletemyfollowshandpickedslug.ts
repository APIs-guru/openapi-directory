import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteMyFollowsHandpickedSlugPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class DeleteMyFollowsHandpickedSlugSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsHandpickedSlugRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMyFollowsHandpickedSlugPathParams;

  @Metadata()
  security: DeleteMyFollowsHandpickedSlugSecurity;
}


export class DeleteMyFollowsHandpickedSlugResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
