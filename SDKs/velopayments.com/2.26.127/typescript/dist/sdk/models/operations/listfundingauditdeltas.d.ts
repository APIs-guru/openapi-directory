import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListFundingAuditDeltasQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId: string;
    updatedSince: Date;
}
export declare class ListFundingAuditDeltasRequest extends SpeakeasyBase {
    queryParams: ListFundingAuditDeltasQueryParams;
}
export declare class ListFundingAuditDeltasResponse extends SpeakeasyBase {
    contentType: string;
    pageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse?: shared.PageResourceFundingPayorStatusAuditResponseFundingPayorStatusAuditResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
