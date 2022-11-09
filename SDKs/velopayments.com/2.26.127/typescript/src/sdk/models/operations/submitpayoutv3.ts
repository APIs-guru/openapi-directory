import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class SubmitPayoutV3MultipartFormData extends SpeakeasyBase {
  @Metadata({ data: "multipart_form, name=file;json=true", elemType: shared.PaymentInstructionV3 })
  file?: shared.PaymentInstructionV3[];

  @Metadata({ data: "multipart_form, name=payorId" })
  payorId?: string;

  @Metadata({ data: "multipart_form, name=payoutFromPayorId" })
  payoutFromPayorId?: string;

  @Metadata({ data: "multipart_form, name=payoutToPayorId" })
  payoutToPayorId?: string;
}


export class SubmitPayoutV3Requests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  createPayoutRequestV3?: shared.CreatePayoutRequestV3;

  @Metadata({ data: "request, media_type=multipart/form-data" })
  object?: SubmitPayoutV3MultipartFormData;
}


export class SubmitPayoutV3Request extends SpeakeasyBase {
  @Metadata()
  request: SubmitPayoutV3Requests;
}


export class SubmitPayoutV3Response extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  headers: Map<string, string[]>;

  @Metadata()
  statusCode: number;

  @Metadata()
  inlineResponse400?: any;

  @Metadata()
  inlineResponse401?: any;

  @Metadata()
  inlineResponse403?: any;
}
