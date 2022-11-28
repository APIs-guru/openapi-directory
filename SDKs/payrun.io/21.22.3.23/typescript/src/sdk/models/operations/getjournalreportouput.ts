import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetJournalReportOuputQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=EmployerKey" })
  employerKey: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=LedgerTarget" })
  ledgerTarget: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=PayFrequency" })
  payFrequency: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxPeriod" })
  taxPeriod?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=TaxYear" })
  taxYear: string;
}


export class GetJournalReportOuputHeaders extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Api-Version" })
  apiVersion: string;

  @SpeakeasyMetadata({ data: "header, style=simple;explode=false;name=Authorization" })
  authorization: string;
}


export class GetJournalReportOuputRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetJournalReportOuputQueryParams;

  @SpeakeasyMetadata()
  headers: GetJournalReportOuputHeaders;
}


export class GetJournalReportOuputResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorModel?: shared.ErrorModel;

  @SpeakeasyMetadata()
  getJournalReportOuput200ApplicationJsonBinaryString?: Uint8Array;

  @SpeakeasyMetadata()
  statusCode: number;
}
