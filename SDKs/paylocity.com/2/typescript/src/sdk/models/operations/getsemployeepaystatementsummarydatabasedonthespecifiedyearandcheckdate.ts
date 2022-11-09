import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=checkDate" })
  checkDate: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: string;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dettypes" })
  dettypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includetotalcount" })
  includetotalcount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagenumber" })
  pagenumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams;

  @Metadata()
  queryParams: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams;

  @Metadata()
  security: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];

  @Metadata({ elemType: shared.PayStatementSummary })
  payStatementSummaries?: shared.PayStatementSummary[];
}
