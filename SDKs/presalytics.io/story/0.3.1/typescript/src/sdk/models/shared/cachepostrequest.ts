import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CachePostRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=current_user_id" })
  currentUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=nonce" })
  nonce?: string;

  @SpeakeasyMetadata({ data: "json, name=subdocument" })
  subdocument?: string;
}
