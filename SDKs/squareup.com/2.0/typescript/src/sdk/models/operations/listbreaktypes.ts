import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListBreakTypesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: string;
}


export class ListBreakTypesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListBreakTypesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListBreakTypesQueryParams;

  @Metadata()
  security: ListBreakTypesSecurity;
}


export class ListBreakTypesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listBreakTypesResponse?: shared.ListBreakTypesResponse;

  @Metadata()
  statusCode: number;
}
