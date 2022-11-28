import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetShippingProvidersResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
