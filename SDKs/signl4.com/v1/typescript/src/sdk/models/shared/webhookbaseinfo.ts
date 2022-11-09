import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WebhookBaseInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=externalAddress" })
  externalAddress?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;
}
