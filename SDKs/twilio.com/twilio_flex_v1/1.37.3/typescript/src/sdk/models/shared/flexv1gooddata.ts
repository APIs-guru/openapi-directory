import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class FlexV1Gooddata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gd_base_url" })
  gdBaseUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=session_expiry" })
  sessionExpiry?: string;

  @SpeakeasyMetadata({ data: "json, name=session_id" })
  sessionId?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=workspace_id" })
  workspaceId?: string;
}
