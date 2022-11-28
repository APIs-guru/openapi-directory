import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PreviewSyncServiceSyncListSyncListPermission extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=list_sid" })
  listSid?: string;

  @SpeakeasyMetadata({ data: "json, name=manage" })
  manage?: boolean;

  @SpeakeasyMetadata({ data: "json, name=read" })
  read?: boolean;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=write" })
  write?: boolean;
}
