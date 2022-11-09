import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetV2EmployeesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=location_id" })
  locationId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: string;
}


export class GetV2EmployeesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetV2EmployeesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetV2EmployeesQueryParams;

  @Metadata()
  security: GetV2EmployeesSecurity;
}


export class GetV2EmployeesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEmployeesResponse?: shared.ListEmployeesResponse;

  @Metadata()
  statusCode: number;
}
