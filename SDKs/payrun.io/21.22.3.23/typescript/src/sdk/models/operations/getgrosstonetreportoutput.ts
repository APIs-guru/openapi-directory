import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetGrossToNetReportOutputQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=MaxIndex" })
  maxIndex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PayScheduleKey" })
  payScheduleKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=StartIndex" })
  startIndex?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaxPeriod" })
  taxPeriod?: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;
}


export class GetGrossToNetReportOutputHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetGrossToNetReportOutputRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetGrossToNetReportOutputQueryParams;

  @Metadata()
  headers: GetGrossToNetReportOutputHeaders;
}


export class GetGrossToNetReportOutputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getGrossToNetReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
