import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyNegotiationsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMyNegotiationsIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyNegotiationsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyNegotiationsIdPathParams;

  @Metadata()
  security: GetMyNegotiationsIdSecurity;
}


export class GetMyNegotiationsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
