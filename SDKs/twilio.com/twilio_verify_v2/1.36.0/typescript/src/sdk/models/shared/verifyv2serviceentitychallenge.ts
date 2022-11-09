import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ChallengeEnumFactorTypesEnum } from "./challengeenumfactortypesenum";
import { ChallengeEnumChallengeReasonsEnum } from "./challengeenumchallengereasonsenum";
import { ChallengeEnumChallengeStatusesEnum } from "./challengeenumchallengestatusesenum";


export class VerifyV2ServiceEntityChallenge extends SpeakeasyBase {
  @Metadata({ data: "json, name=account_sid" })
  accountSid?: string;

  @Metadata({ data: "json, name=date_created" })
  dateCreated?: Date;

  @Metadata({ data: "json, name=date_responded" })
  dateResponded?: Date;

  @Metadata({ data: "json, name=date_updated" })
  dateUpdated?: Date;

  @Metadata({ data: "json, name=details" })
  details?: any;

  @Metadata({ data: "json, name=entity_sid" })
  entitySid?: string;

  @Metadata({ data: "json, name=expiration_date" })
  expirationDate?: Date;

  @Metadata({ data: "json, name=factor_sid" })
  factorSid?: string;

  @Metadata({ data: "json, name=factor_type" })
  factorType?: ChallengeEnumFactorTypesEnum;

  @Metadata({ data: "json, name=hidden_details" })
  hiddenDetails?: any;

  @Metadata({ data: "json, name=identity" })
  identity?: string;

  @Metadata({ data: "json, name=links" })
  links?: Map<string, any>;

  @Metadata({ data: "json, name=metadata" })
  metadata?: any;

  @Metadata({ data: "json, name=responded_reason" })
  respondedReason?: ChallengeEnumChallengeReasonsEnum;

  @Metadata({ data: "json, name=service_sid" })
  serviceSid?: string;

  @Metadata({ data: "json, name=sid" })
  sid?: string;

  @Metadata({ data: "json, name=status" })
  status?: ChallengeEnumChallengeStatusesEnum;

  @Metadata({ data: "json, name=url" })
  url?: string;
}
