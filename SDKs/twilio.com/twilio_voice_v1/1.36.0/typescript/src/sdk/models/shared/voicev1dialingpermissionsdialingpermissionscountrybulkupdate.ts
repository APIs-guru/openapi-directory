import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VoiceV1DialingPermissionsDialingPermissionsCountryBulkUpdate extends SpeakeasyBase {
  @Metadata({ data: "json, name=update_count" })
  updateCount?: number;

  @Metadata({ data: "json, name=update_request" })
  updateRequest?: string;
}
