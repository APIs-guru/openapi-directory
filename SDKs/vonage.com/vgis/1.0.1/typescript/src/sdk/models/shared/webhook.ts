import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum WebhookEventsEnum {
    Call = "CALL"
}

export enum WebhookMetadataPolicyEnum {
    None = "NONE",
    Header = "HEADER",
    Body = "BODY"
}

export enum WebhookSigningAlgoEnum {
    HmacSha256 = "HMAC_SHA256",
    None = "NONE"
}


export class WebhookStatistics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=failed" })
  failed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=totalAttempts" })
  totalAttempts?: number;

  @SpeakeasyMetadata({ data: "json, name=totalFailures" })
  totalFailures?: number;

  @SpeakeasyMetadata({ data: "json, name=totalSuccesses" })
  totalSuccesses?: number;
}

export enum WebhookStatusEnum {
    Active = "ACTIVE",
    Paused = "PAUSED"
}


export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accountId" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: WebhookEventsEnum[];

  @SpeakeasyMetadata({ data: "json, name=expireAt" })
  expireAt?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=metadataPolicy" })
  metadataPolicy?: WebhookMetadataPolicyEnum;

  @SpeakeasyMetadata({ data: "json, name=purgeAt" })
  purgeAt?: string;

  @SpeakeasyMetadata({ data: "json, name=renewedAt" })
  renewedAt?: string;

  @SpeakeasyMetadata({ data: "json, name=signingAlgo" })
  signingAlgo?: WebhookSigningAlgoEnum;

  @SpeakeasyMetadata({ data: "json, name=signingKey" })
  signingKey?: string;

  @SpeakeasyMetadata({ data: "json, name=statistics" })
  statistics?: WebhookStatistics;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: WebhookStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;

  @SpeakeasyMetadata({ data: "json, name=userId" })
  userId?: string;
}
