import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CustomDeviceGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.CustomDeviceToPost })
  customDeviceToPosts?: shared.CustomDeviceToPost[];

  @Metadata()
  statusCode: number;
}
