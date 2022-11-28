import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPayoutsForPayorV3StatusEnum {
    Accepted = "ACCEPTED",
    Rejected = "REJECTED",
    Submitted = "SUBMITTED",
    Quoted = "QUOTED",
    Instructed = "INSTRUCTED",
    Completed = "COMPLETED",
    Incomplete = "INCOMPLETE",
    Confirmed = "CONFIRMED",
    Withdrawn = "WITHDRAWN"
}
export declare class GetPayoutsForPayorV3QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId: string;
    payoutMemo?: string;
    sort?: string;
    status?: GetPayoutsForPayorV3StatusEnum;
    submittedDateFrom?: Date;
    submittedDateTo?: Date;
}
export declare class GetPayoutsForPayorV3Request extends SpeakeasyBase {
    queryParams: GetPayoutsForPayorV3QueryParams;
}
export declare class GetPayoutsForPayorV3Response extends SpeakeasyBase {
    contentType: string;
    getPayoutsResponseV3?: shared.GetPayoutsResponseV3;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
