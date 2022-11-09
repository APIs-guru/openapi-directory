import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class MessagingV1Deactivation extends SpeakeasyBase {
  @Metadata({ data: "json, name=redirect_to" })
  redirectTo?: string;
}
