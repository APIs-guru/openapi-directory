import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class WebhookBaseInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=externalAddress" })
  externalAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=teamId" })
  teamId?: string;
}
