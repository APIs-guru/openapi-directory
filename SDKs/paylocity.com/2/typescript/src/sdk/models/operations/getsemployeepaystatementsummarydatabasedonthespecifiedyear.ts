import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: string;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=dettypes" })
  dettypes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=includetotalcount" })
  includetotalcount?: boolean;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagenumber" })
  pagenumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearPathParams;

  @Metadata()
  queryParams: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearQueryParams;

  @Metadata()
  security: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearSecurity;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata({ elemType: shared.Error })
  errors?: shared.Error[];

  @Metadata({ elemType: shared.PayStatementSummary })
  payStatementSummaries?: shared.PayStatementSummary[];
}
