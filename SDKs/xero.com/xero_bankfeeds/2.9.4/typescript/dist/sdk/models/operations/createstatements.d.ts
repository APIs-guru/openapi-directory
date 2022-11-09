import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CreateStatementsHeaders extends SpeakeasyBase {
    xeroTenantId: string;
}
export declare class CreateStatementsSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateStatementsRequest extends SpeakeasyBase {
    headers: CreateStatementsHeaders;
    request?: shared.Statements;
    security: CreateStatementsSecurity;
}
export declare class CreateStatementsResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statements?: shared.Statements;
    statusCode: number;
}
