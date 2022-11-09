import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AccessTokenEnumFactorTypesEnum } from "./accesstokenenumfactortypesenum";


export class VerifyV2ServiceAccessToken extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=entity_identity" })
  entityIdentity?: string;

  @Metadata({ data: "json, name=factor_friendly_name" })
  factorFriendlyName?: string;

  @Metadata({ data: "json, name=factor_type" })
  factorType?: AccessTokenEnumFactorTypesEnum;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=token" })
  token?: string;

  @Metadata({ data: "json, name=ttl" })
  ttl?: number;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
