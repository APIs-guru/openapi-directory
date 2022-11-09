import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateRemoteIdRequest2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=payorId" })
  payorId: string;

  @Metadata({ data: "json, name=remoteId" })
  remoteId: string;
}
