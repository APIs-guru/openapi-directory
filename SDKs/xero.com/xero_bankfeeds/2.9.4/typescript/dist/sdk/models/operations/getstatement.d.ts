import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetStatementPathParams extends SpeakeasyBase {
    statementId: string;
}
export declare class GetStatementQueryParams extends SpeakeasyBase {
    statementId: string;
}
export declare class GetStatementHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class GetStatementSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetStatementRequest extends SpeakeasyBase {
    pathParams: GetStatementPathParams;
    queryParams: GetStatementQueryParams;
    headers: GetStatementHeaders;
    security: GetStatementSecurity;
}
export declare class GetStatementResponse extends SpeakeasyBase {
    contentType: string;
    statement?: shared.Statement;
    statusCode: number;
}
