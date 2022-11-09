import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Video } from "./video";
import { User } from "./user";


export class UploadAttempt extends SpeakeasyBase {
  @Metadata({ data: "json, name=clip" })
  clip?: Video;

  @Metadata({ data: "json, name=complete_uri" })
  completeUri?: string;

  @Metadata({ data: "json, name=form" })
  form?: string;

  @Metadata({ data: "json, name=ticket_id" })
  ticketId: string;

  @Metadata({ data: "json, name=upload_link" })
  uploadLink: string;

  @Metadata({ data: "json, name=uri" })
  uri: string;

  @Metadata({ data: "json, name=user" })
  user: User;
}
