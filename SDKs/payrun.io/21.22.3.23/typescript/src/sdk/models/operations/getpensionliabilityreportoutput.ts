import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetPensionLiabilityReportOutputQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=PensionKey" })
  pensionKey: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;
}


export class GetPensionLiabilityReportOutputHeaders extends SpeakeasyBase {
  @Metadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @Metadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetPensionLiabilityReportOutputRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetPensionLiabilityReportOutputQueryParams;

  @Metadata()
  headers: GetPensionLiabilityReportOutputHeaders;
}


export class GetPensionLiabilityReportOutputResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  errorModel?: shared.ErrorModel;

  @Metadata()
  getPensionLiabilityReportOutput200ApplicationJsonBinaryString?: Uint8Array;

  @Metadata()
  statusCode: number;
}
