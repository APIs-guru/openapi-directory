import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum WebhookEventsEnum {
    Call = "CALL"
}

export enum WebhookMetadataPolicyEnum {
    None = "NONE"
,    Header = "HEADER"
,    Body = "BODY"
}

export enum WebhookSigningAlgoEnum {
    HmacSha256 = "HMAC_SHA256"
,    None = "NONE"
}


export class WebhookStatistics extends SpeakeasyBase {
  @Metadata({ data: "json, name=failed" })
  failed?: boolean;

  @Metadata({ data: "json, name=totalAttempts" })
  totalAttempts?: number;

  @Metadata({ data: "json, name=totalFailures" })
  totalFailures?: number;

  @Metadata({ data: "json, name=totalSuccesses" })
  totalSuccesses?: number;
}

export enum WebhookStatusEnum {
    Active = "ACTIVE"
,    Paused = "PAUSED"
}


export class Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=accountId" })
  accountId?: string;

  @Metadata({ data: "json, name=createdAt" })
  createdAt?: string;

  @Metadata({ data: "json, name=events" })
  events?: WebhookEventsEnum[];

  @Metadata({ data: "json, name=expireAt" })
  expireAt?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=metadataPolicy" })
  metadataPolicy?: WebhookMetadataPolicyEnum;

  @Metadata({ data: "json, name=purgeAt" })
  purgeAt?: string;

  @Metadata({ data: "json, name=renewedAt" })
  renewedAt?: string;

  @Metadata({ data: "json, name=signingAlgo" })
  signingAlgo?: WebhookSigningAlgoEnum;

  @Metadata({ data: "json, name=signingKey" })
  signingKey?: string;

  @Metadata({ data: "json, name=statistics" })
  statistics?: WebhookStatistics;

  @Metadata({ data: "json, name=status" })
  status?: WebhookStatusEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;

  @Metadata({ data: "json, name=userId" })
  userId?: string;
}
