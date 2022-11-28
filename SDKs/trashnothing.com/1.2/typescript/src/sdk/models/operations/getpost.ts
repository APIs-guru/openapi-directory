import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPostPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class GetPostSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit?: shared.SchemeOauth2Implicit;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code?: shared.SchemeOauth2Code;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey?: shared.SchemeApiKey;
}


export class GetPostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetPostPathParams;

  @SpeakeasyMetadata()
  security: GetPostSecurity;
}


export class GetPostResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  post?: shared.Post;

  @SpeakeasyMetadata()
  statusCode: number;
}
