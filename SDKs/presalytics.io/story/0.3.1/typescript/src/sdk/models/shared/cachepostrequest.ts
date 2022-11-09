import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CachePostRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=current_user_id" })
  currentUserId?: string;

  @Metadata({ data: "json, name=nonce" })
  nonce?: string;

  @Metadata({ data: "json, name=subdocument" })
  subdocument?: string;
}
