import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyPayoutsIdLineItemsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetMyPayoutsIdLineItemsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyPayoutsIdLineItemsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyPayoutsIdLineItemsPathParams;

  @Metadata()
  security: GetMyPayoutsIdLineItemsSecurity;
}


export class GetMyPayoutsIdLineItemsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
