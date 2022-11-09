import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RegisterForRealtimeApiGetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.RegisterRealtimeApiData })
  registerRealtimeApiData?: shared.RegisterRealtimeApiData[];

  @Metadata()
  statusCode: number;
}
