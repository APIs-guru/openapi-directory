import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Video } from "./video";
import { User } from "./user";



export class UploadAttempt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clip" })
  clip?: Video;

  @SpeakeasyMetadata({ data: "json, name=complete_uri" })
  completeUri?: string;

  @SpeakeasyMetadata({ data: "json, name=form" })
  form?: string;

  @SpeakeasyMetadata({ data: "json, name=ticket_id" })
  ticketId: string;

  @SpeakeasyMetadata({ data: "json, name=upload_link" })
  uploadLink: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri: string;

  @SpeakeasyMetadata({ data: "json, name=user" })
  user: User;
}
