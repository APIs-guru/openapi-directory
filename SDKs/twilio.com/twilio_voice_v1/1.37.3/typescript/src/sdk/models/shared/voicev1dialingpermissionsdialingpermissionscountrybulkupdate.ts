import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=update_count" })
  updateCount?: number;

  @SpeakeasyMetadata({ data: "json, name=update_request" })
  updateRequest?: string;
}
