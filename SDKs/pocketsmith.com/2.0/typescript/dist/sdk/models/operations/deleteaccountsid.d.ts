import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteAccountsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DeleteAccountsIdRequest extends SpeakeasyBase {
    pathParams: DeleteAccountsIdPathParams;
}
export declare class DeleteAccountsIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
}
