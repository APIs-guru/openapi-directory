import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetPaymentMethodsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
