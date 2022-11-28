import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class SubmitPayoutV3MultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=file;json=true", elemType: shared.PaymentInstructionV3 })
  file?: shared.PaymentInstructionV3[];

  @SpeakeasyMetadata({ data: "multipart_form, name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=payoutFromPayorId" })
  payoutFromPayorId?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=payoutToPayorId" })
  payoutToPayorId?: string;
}


export class SubmitPayoutV3Requests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  createPayoutRequestV3?: shared.CreatePayoutRequestV3;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object?: SubmitPayoutV3MultipartFormData;
}


export class SubmitPayoutV3Request extends SpeakeasyBase {
  @SpeakeasyMetadata()
  request: SubmitPayoutV3Requests;
}


export class SubmitPayoutV3Response extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  headers: Map<string, string[]>;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inlineResponse400?: any;

  @SpeakeasyMetadata()
  inlineResponse401?: any;

  @SpeakeasyMetadata()
  inlineResponse403?: any;
}
