import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetHolidayBalanceReportOutputQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployeeCodes" })
  employeeCodes?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=HolidayYearEnd" })
  holidayYearEnd: Date;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" })
  maxIndex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartIndex" })
  startIndex?: string;
}


export class GetHolidayBalanceReportOutputHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetHolidayBalanceReportOutputRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetHolidayBalanceReportOutputQueryParams;

  @Metadata()
  headers: GetHolidayBalanceReportOutputHeaders;
}


export class GetHolidayBalanceReportOutputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getHolidayBalanceReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
