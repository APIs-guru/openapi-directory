import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VmConnectionInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=connectionType" })
  connectionType?: number;

  @Metadata({ data: "json, name=liveShareWorkspaceId" })
  liveShareWorkspaceId?: string;
}
