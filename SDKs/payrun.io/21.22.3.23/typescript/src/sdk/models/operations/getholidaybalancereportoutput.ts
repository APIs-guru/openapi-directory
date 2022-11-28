import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetHolidayBalanceReportOutputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployeeCodes" })
  employeeCodes?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=HolidayYearEnd" })
  holidayYearEnd: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" })
  maxIndex?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=StartIndex" })
  startIndex?: string;
}


export class GetHolidayBalanceReportOutputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetHolidayBalanceReportOutputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetHolidayBalanceReportOutputQueryParams;

  @SpeakeasyMetadata()
  headers: GetHolidayBalanceReportOutputHeaders;
}


export class GetHolidayBalanceReportOutputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getHolidayBalanceReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
