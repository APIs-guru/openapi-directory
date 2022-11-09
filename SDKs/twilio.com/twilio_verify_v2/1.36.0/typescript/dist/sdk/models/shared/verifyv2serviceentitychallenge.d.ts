import { SpeakeasyBase } from "../../../internal/utils/utils";
import { ChallengeEnumFactorTypesEnum } from "./challengeenumfactortypesenum";
import { ChallengeEnumChallengeReasonsEnum } from "./challengeenumchallengereasonsenum";
import { ChallengeEnumChallengeStatusesEnum } from "./challengeenumchallengestatusesenum";
export declare class VerifyV2ServiceEntityChallenge extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    dateResponded?: Date;
    dateUpdated?: Date;
    details?: any;
    entitySid?: string;
    expirationDate?: Date;
    factorSid?: string;
    factorType?: ChallengeEnumFactorTypesEnum;
    hiddenDetails?: any;
    identity?: string;
    links?: Map<string, any>;
    metadata?: any;
    respondedReason?: ChallengeEnumChallengeReasonsEnum;
    serviceSid?: string;
    sid?: string;
    status?: ChallengeEnumChallengeStatusesEnum;
    url?: string;
}
