import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ChallengeEnumFactorTypesEnum } from "./challengeenumfactortypesenum";
import { ChallengeEnumChallengeReasonsEnum } from "./challengeenumchallengereasonsenum";
import { ChallengeEnumChallengeStatusesEnum } from "./challengeenumchallengestatusesenum";



export class VerifyV2ServiceEntityChallenge extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @SpeakeasyMetadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_responded" })
  dateResponded?: Date;

  @SpeakeasyMetadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @SpeakeasyMetadata({ data: "json, name=details" })
  details?: any;

  @SpeakeasyMetadata({ data: "json, name=entity_sid" })
  entitySid?: string;

  @SpeakeasyMetadata({ data: "json, name=expiration_date" })
  expirationDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=factor_sid" })
  factorSid?: string;

  @SpeakeasyMetadata({ data: "json, name=factor_type" })
  factorType?: ChallengeEnumFactorTypesEnum;

  @SpeakeasyMetadata({ data: "json, name=hidden_details" })
  hiddenDetails?: any;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: string;

  @SpeakeasyMetadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: any;

  @SpeakeasyMetadata({ data: "json, name=responded_reason" })
  respondedReason?: ChallengeEnumChallengeReasonsEnum;

  @SpeakeasyMetadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @SpeakeasyMetadata({ data: "json, name=sid" })
  sid?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: ChallengeEnumChallengeStatusesEnum;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
