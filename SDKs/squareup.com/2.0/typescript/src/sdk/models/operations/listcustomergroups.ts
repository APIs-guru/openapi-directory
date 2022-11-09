import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCustomerGroupsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class ListCustomerGroupsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListCustomerGroupsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCustomerGroupsQueryParams;

  @Metadata()
  security: ListCustomerGroupsSecurity;
}


export class ListCustomerGroupsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCustomerGroupsResponse?: shared.ListCustomerGroupsResponse;

  @Metadata()
  statusCode: number;
}
