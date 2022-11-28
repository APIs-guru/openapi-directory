import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetPayoutsForPayorV4StatusEnum {
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
export declare class GetPayoutsForPayorV4QueryParams extends SpeakeasyBase {
    fromPayorName?: string;
    page?: number;
    pageSize?: number;
    payorId?: string;
    payoutMemo?: string;
    sort?: string;
    status?: GetPayoutsForPayorV4StatusEnum;
    submittedDateFrom?: Date;
    submittedDateTo?: Date;
}
export declare class GetPayoutsForPayorV4Request extends SpeakeasyBase {
    queryParams: GetPayoutsForPayorV4QueryParams;
}
export declare class GetPayoutsForPayorV4Response extends SpeakeasyBase {
    contentType: string;
    getPayoutsResponse?: shared.GetPayoutsResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
