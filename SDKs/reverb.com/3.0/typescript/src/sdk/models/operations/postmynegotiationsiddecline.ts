import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyNegotiationsIdDeclinePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyNegotiationsIdDeclineSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyNegotiationsIdDeclineRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyNegotiationsIdDeclinePathParams;

  @SpeakeasyMetadata()
  security: PostMyNegotiationsIdDeclineSecurity;
}


export class PostMyNegotiationsIdDeclineResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
