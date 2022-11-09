import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCustomersQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_field" })
  sortField?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=sort_order" })
  sortOrder?: string;
}


export class ListCustomersSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListCustomersRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCustomersQueryParams;

  @Metadata()
  security: ListCustomersSecurity;
}


export class ListCustomersResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCustomersResponse?: shared.ListCustomersResponse;

  @Metadata()
  statusCode: number;
}
