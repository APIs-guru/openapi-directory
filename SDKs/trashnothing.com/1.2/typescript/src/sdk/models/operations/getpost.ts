import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=post_id" })
  postId: string;
}


export class GetPostSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Implicit: shared.SchemeOauth2Implicit;
}


export class GetPostSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2Code: shared.SchemeOauth2Code;
}


export class GetPostSecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  apiKey: shared.SchemeApiKey;
}


export class GetPostSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetPostSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetPostSecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: GetPostSecurityOption3;
}


export class GetPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetPostPathParams;

  @Metadata()
  security: GetPostSecurity;
}


export class GetPostResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  post?: shared.Post;

  @Metadata()
  statusCode: number;
}
