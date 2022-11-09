import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetAllEmployeesPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetAllEmployeesQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=includetotalcount" })
  includetotalcount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagenumber" })
  pagenumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetAllEmployeesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllEmployeesRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllEmployeesPathParams;

  @Metadata()
  queryParams: GetAllEmployeesQueryParams;

  @Metadata()
  security: GetAllEmployeesSecurity;
}


export class GetAllEmployeesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.EmployeeInfo })
  employeeInfos?: shared.EmployeeInfo[];

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
