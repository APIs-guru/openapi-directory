import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VmConnectionInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=connectionType" })
  connectionType?: number;

  @SpeakeasyMetadata({ data: "json, name=liveShareWorkspaceId" })
  liveShareWorkspaceId?: string;
}
