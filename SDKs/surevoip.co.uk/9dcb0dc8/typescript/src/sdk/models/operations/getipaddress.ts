import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetIpAddressResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
