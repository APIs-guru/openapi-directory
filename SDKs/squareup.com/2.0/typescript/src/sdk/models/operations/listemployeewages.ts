import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ListEmployeeWagesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=cursor" })
  cursor?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=employee_id" })
  employeeId?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=limit" })
  limit?: number;
}


export class ListEmployeeWagesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class ListEmployeeWagesRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: ListEmployeeWagesQueryParams;

  @Metadata()
  security: ListEmployeeWagesSecurity;
}


export class ListEmployeeWagesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  listEmployeeWagesResponse?: shared.ListEmployeeWagesResponse;

  @Metadata()
  statusCode: number;
}
