import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyFollowsCategoriesUuidPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=uuid" })
  uuid: string;
}


export class PostMyFollowsCategoriesUuidSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsCategoriesUuidRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyFollowsCategoriesUuidPathParams;

  @SpeakeasyMetadata()
  security: PostMyFollowsCategoriesUuidSecurity;
}


export class PostMyFollowsCategoriesUuidResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
