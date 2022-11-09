import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MediaV1PlayerStreamerPlayerStreamerPlaybackGrant extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=grant" })
  grant?: any;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
