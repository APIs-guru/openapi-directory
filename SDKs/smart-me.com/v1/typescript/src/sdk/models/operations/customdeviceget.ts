import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CustomDeviceGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.CustomDeviceToPost })
  customDeviceToPosts?: shared.CustomDeviceToPost[];

  @SpeakeasyMetadata()
  statusCode: number;
}
