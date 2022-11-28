import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateRemoteIdRequest2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId: string;

  @SpeakeasyMetadata({ data: "json, name=remoteId" })
  remoteId: string;
}
