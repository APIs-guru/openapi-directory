import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=companyId" })
  companyId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=employeeId" })
  employeeId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=year" })
  year: string;
}


export class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=dettypes" })
  dettypes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=includetotalcount" })
  includetotalcount?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagenumber" })
  pagenumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=pagesize" })
  pagesize?: number;
}


export class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  paylocityAuth: shared.SchemePaylocityAuth;
}


export class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearPathParams;

  @SpeakeasyMetadata()
  queryParams: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearQueryParams;

  @SpeakeasyMetadata()
  security: GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearSecurity;
}


export class GetsEmployeePayStatementDetailDataBasedOnTheSpecifiedYearResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata({ elemType: shared.Error })
  errors?: shared.Error[];

  @SpeakeasyMetadata({ elemType: shared.PayStatementDetails })
  payStatementDetails?: shared.PayStatementDetails[];
}
