import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CategoryEnum } from "./categoryenum";



export class WebhookResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authorizationHeader" })
  authorizationHeader?: string;

  @SpeakeasyMetadata({ data: "json, name=categories" })
  categories?: CategoryEnum[];

  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=payorId" })
  payorId?: string;

  @SpeakeasyMetadata({ data: "json, name=webhookUrl" })
  webhookUrl?: string;
}
