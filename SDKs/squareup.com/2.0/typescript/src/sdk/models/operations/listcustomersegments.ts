import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListCustomerSegmentsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class ListCustomerSegmentsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListCustomerSegmentsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListCustomerSegmentsQueryParams;

  @Metadata()
  security: ListCustomerSegmentsSecurity;
}


export class ListCustomerSegmentsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listCustomerSegmentsResponse?: shared.ListCustomerSegmentsResponse;

  @Metadata()
  statusCode: number;
}
