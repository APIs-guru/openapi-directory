import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ShowInvoiceSubmissionEvidencePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=guid" })
  guid: string;
}


export class ShowInvoiceSubmissionEvidenceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShowInvoiceSubmissionEvidencePathParams;
}


export class ShowInvoiceSubmissionEvidenceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  invoiceSubmissionEvidence?: any;

  @Metadata()
  statusCode: number;
}
