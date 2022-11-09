import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyPaymentsSellingIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMyPaymentsSellingIdSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyPaymentsSellingIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyPaymentsSellingIdPathParams;

  @Metadata()
  security: GetMyPaymentsSellingIdSecurity;
}


export class GetMyPaymentsSellingIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
