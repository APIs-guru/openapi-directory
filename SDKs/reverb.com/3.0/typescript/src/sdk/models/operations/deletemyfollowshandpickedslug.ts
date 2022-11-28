import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteMyFollowsHandpickedSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class DeleteMyFollowsHandpickedSlugSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsHandpickedSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMyFollowsHandpickedSlugPathParams;

  @SpeakeasyMetadata()
  security: DeleteMyFollowsHandpickedSlugSecurity;
}


export class DeleteMyFollowsHandpickedSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
