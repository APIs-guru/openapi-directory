import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyNegotiationsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMyNegotiationsIdSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyNegotiationsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyNegotiationsIdPathParams;

  @SpeakeasyMetadata()
  security: GetMyNegotiationsIdSecurity;
}


export class GetMyNegotiationsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
