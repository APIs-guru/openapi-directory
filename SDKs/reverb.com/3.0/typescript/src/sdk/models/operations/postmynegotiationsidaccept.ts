import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyNegotiationsIdAcceptPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyNegotiationsIdAcceptRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;
}


export class PostMyNegotiationsIdAcceptSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyNegotiationsIdAcceptRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyNegotiationsIdAcceptPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: PostMyNegotiationsIdAcceptRequestBody;

  @SpeakeasyMetadata()
  security: PostMyNegotiationsIdAcceptSecurity;
}


export class PostMyNegotiationsIdAcceptResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
