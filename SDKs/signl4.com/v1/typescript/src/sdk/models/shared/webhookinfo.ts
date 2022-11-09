import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class WebhookInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=externalAddress" })
  externalAddress?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=subscriptionId" })
  subscriptionId?: string;

  @Metadata({ data: "json, name=teamId" })
  teamId?: string;
}
