import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebhookCreateEventsEnum {
    Call = "CALL"
}

export enum WebhookCreateMetadataPolicyEnum {
    None = "NONE"
,    Header = "HEADER"
,    Body = "BODY"
}

export enum WebhookCreateSigningAlgoEnum {
    HmacSha256 = "HMAC_SHA256"
}


export class WebhookCreate extends SpeakeasyBase {
  @Metadata({ data: "json, name=events" })
  events?: WebhookCreateEventsEnum[];

  @Metadata({ data: "json, name=metadataPolicy" })
  metadataPolicy?: WebhookCreateMetadataPolicyEnum;

  @Metadata({ data: "json, name=signingAlgo" })
  signingAlgo?: WebhookCreateSigningAlgoEnum;

  @Metadata({ data: "json, name=signingKey" })
  signingKey?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
