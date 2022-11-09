import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: string;
}


export class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dettypes" })
  dettypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includetotalcount" })
  includetotalcount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagenumber" })
  pagenumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams;

  @Metadata()
  queryParams: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams;

  @Metadata()
  security: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity;
}


export class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];

  @Metadata({ elemType: shared.PayStatementDetails })
  payStatementDetails?: shared.PayStatementDetails[];
}
