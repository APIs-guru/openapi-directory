import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListMerchantsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: number;
}


export class ListMerchantsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListMerchantsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListMerchantsQueryParams;

  @Metadata()
  security: ListMerchantsSecurity;
}


export class ListMerchantsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listMerchantsResponse?: shared.ListMerchantsResponse;

  @Metadata()
  statusCode: number;
}
