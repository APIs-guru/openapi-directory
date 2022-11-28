import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WebhookCreateEventsEnum {
    Call = "CALL"
}

export enum WebhookCreateMetadataPolicyEnum {
    None = "NONE",
    Header = "HEADER",
    Body = "BODY"
}

export enum WebhookCreateSigningAlgoEnum {
    HmacSha256 = "HMAC_SHA256"
}


export class WebhookCreate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: WebhookCreateEventsEnum[];

  @SpeakeasyMetadata({ data: "json, name=metadataPolicy" })
  metadataPolicy?: WebhookCreateMetadataPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=signingAlgo" })
  signingAlgo?: WebhookCreateSigningAlgoEnum;

  @SpeakeasyMetadata({ data: "json, name=signingKey" })
  signingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
