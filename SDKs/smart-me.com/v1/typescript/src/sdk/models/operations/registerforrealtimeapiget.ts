import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RegisterForRealtimeApiGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.RegisterRealtimeApiData })
  registerRealtimeApiData?: shared.RegisterRealtimeApiData[];

  @SpeakeasyMetadata()
  statusCode: number;
}
