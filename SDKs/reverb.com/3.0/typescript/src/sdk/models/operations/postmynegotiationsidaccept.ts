import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyNegotiationsIdAcceptPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyNegotiationsIdAcceptRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=message" })
  message?: string;
}


export class PostMyNegotiationsIdAcceptSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyNegotiationsIdAcceptRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyNegotiationsIdAcceptPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: PostMyNegotiationsIdAcceptRequestBody;

  @Metadata()
  security: PostMyNegotiationsIdAcceptSecurity;
}


export class PostMyNegotiationsIdAcceptResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
