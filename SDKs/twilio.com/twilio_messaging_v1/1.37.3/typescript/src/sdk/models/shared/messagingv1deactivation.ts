import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class MessagingV1Deactivation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=redirect_to" })
  redirectTo?: string;
}
