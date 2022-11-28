import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetDevicesSummaryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
