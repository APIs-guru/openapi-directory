import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetListingsIdNegotiationPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetListingsIdNegotiationSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetListingsIdNegotiationRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetListingsIdNegotiationPathParams;

  @Metadata()
  security: GetListingsIdNegotiationSecurity;
}


export class GetListingsIdNegotiationResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
