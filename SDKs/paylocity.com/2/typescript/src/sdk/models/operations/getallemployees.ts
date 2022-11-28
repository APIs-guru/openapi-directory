import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAllEmployeesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;
}


export class GetAllEmployeesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includetotalcount" })
  includetotalcount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagenumber" })
  pagenumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetAllEmployeesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetAllEmployeesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllEmployeesPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAllEmployeesQueryParams;

  @SpeakeasyMetadata()
  security: GetAllEmployeesSecurity;
}


export class GetAllEmployeesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.EmployeeInfo })
  employeeInfos?: shared.EmployeeInfo[];

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];
}
