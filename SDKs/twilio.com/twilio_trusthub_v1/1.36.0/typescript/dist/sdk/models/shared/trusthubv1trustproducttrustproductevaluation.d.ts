import { SpeakeasyBase } from "../../../internal/utils/utils";
import { TrustProductEvaluationEnumStatusEnum } from "./trustproductevaluationenumstatusenum";
export declare class TrusthubV1TrustProductTrustProductEvaluation extends SpeakeasyBase {
    accountSid?: string;
    dateCreated?: Date;
    policySid?: string;
    results?: any[];
    sid?: string;
    status?: TrustProductEvaluationEnumStatusEnum;
    trustProductSid?: string;
    url?: string;
}
