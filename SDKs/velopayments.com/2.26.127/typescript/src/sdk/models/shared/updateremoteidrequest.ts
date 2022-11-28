import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRemoteIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId: string;
}
