import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetPaymentMethodsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
