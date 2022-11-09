import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyNegotiationsIdDeclinePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PostMyNegotiationsIdDeclineSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyNegotiationsIdDeclineRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyNegotiationsIdDeclinePathParams;

  @Metadata()
  security: PostMyNegotiationsIdDeclineSecurity;
}


export class PostMyNegotiationsIdDeclineResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
