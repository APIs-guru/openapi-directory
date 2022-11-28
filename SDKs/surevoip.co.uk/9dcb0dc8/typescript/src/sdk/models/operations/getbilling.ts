import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetBillingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
