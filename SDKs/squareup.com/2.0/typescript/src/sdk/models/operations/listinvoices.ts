import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListInvoicesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId: string;
}


export class ListInvoicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListInvoicesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListInvoicesQueryParams;

  @Metadata()
  security: ListInvoicesSecurity;
}


export class ListInvoicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listInvoicesResponse?: shared.ListInvoicesResponse;

  @Metadata()
  statusCode: number;
}
