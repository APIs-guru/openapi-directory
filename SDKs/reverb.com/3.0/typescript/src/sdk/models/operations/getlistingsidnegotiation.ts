import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetListingsIdNegotiationPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingsIdNegotiationSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetListingsIdNegotiationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingsIdNegotiationPathParams;

  @SpeakeasyMetadata()
  security: GetListingsIdNegotiationSecurity;
}


export class GetListingsIdNegotiationResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
