import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStatementsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetStatementsHeaders extends SpeakeasyBase {
    xeroApplicationId?: string;
    xeroTenantId: string;
    xeroUserId?: string;
}
export declare class GetStatementsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetStatementsRequest extends SpeakeasyBase {
    queryParams: GetStatementsQueryParams;
    headers: GetStatementsHeaders;
    security: GetStatementsSecurity;
}
export declare class GetStatementsResponse extends SpeakeasyBase {
    contentType: string;
    statements?: shared.Statements;
    statusCode: number;
}
