import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AccessTokenEnumFactorTypesEnum } from "./accesstokenenumfactortypesenum";



export class VerifyV2ServiceAccessToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=entity_identity" })
  entityIdentity?: string;

  @SpeakeasyMetadata({ data: "json, name=factor_friendly_name" })
  factorFriendlyName?: string;

  @SpeakeasyMetadata({ data: "json, name=factor_type" })
  factorType?: AccessTokenEnumFactorTypesEnum;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=token" })
  token?: string;

  @SpeakeasyMetadata({ data: "json, name=ttl" })
  ttl?: number;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
