import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=checkDate" })
  checkDate: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: string;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dettypes" })
  dettypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includetotalcount" })
  includetotalcount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagenumber" })
  pagenumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDatePathParams;

  @SpeakeasyMetadata()
  queryParams: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateQueryParams;

  @SpeakeasyMetadata()
  security: GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateSecurity;
}


export class GetsEmployeePayStatementSummaryDataBasedOnTheSpecifiedYearAndCheckDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];

  @SpeakeasyMetadata({ elemType: shared.PayStatementSummary })
  payStatementSummaries?: shared.PayStatementSummary[];
}
