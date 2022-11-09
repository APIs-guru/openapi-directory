import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyOrdersBuyingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMyOrdersBuyingIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyOrdersBuyingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyOrdersBuyingIdPathParams;

  @Metadata()
  security: GetMyOrdersBuyingIdSecurity;
}


export class GetMyOrdersBuyingIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
