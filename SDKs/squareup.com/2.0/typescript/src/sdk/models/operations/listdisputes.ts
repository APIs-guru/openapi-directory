import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListDisputesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=states" })
  states?: string;
}


export class ListDisputesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListDisputesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListDisputesQueryParams;

  @Metadata()
  security: ListDisputesSecurity;
}


export class ListDisputesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listDisputesResponse?: shared.ListDisputesResponse;

  @Metadata()
  statusCode: number;
}
