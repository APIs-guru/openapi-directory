import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ShowInvoiceSubmissionEvidencePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;
}


export class ShowInvoiceSubmissionEvidenceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ShowInvoiceSubmissionEvidencePathParams;
}


export class ShowInvoiceSubmissionEvidenceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  invoiceSubmissionEvidence?: any;

  @SpeakeasyMetadata()
  statusCode: number;
}
