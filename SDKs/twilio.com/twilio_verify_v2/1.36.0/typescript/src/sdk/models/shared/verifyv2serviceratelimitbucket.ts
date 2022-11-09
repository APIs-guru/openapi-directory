import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class VerifyV2ServiceRateLimitBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=interval" })
  interval?: number;

  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=rate_limit_sid" })
  rateLimitSid?: string;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
