import { SpeakeasyBase } from "../../../internal/utils";
import { CustomerProfileEvaluationEnumStatusEnum } from "./customerprofileevaluationenumstatusenum";
export declare class TrusthubV1CustomerProfileCustomerProfileEvaluation extends SpeakeasyBase {
    accountSid?: string;
    customerProfileSid?: string;
    dateCreated?: Date;
    policySid?: string;
    results?: any[];
    sid?: string;
    status?: CustomerProfileEvaluationEnumStatusEnum;
    url?: string;
}
