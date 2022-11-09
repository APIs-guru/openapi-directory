import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CategoryEnum } from "./categoryenum";


export class UpdateWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=authorizationHeader" })
  authorizationHeader?: string;

  @Metadata({ data: "json, name=categories" })
  categories?: CategoryEnum[];

  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @Metadata({ data: "json, name=webhookUrl" })
  webhookUrl?: string;
}
