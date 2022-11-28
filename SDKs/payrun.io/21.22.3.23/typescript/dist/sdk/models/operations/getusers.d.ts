import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersHeaders extends SpeakeasyBase {
    apiVersion: string;
    authorization: string;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    headers: GetUsersHeaders;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    errorModel?: shared.ErrorModel;
    linkCollection?: shared.LinkCollection;
    statusCode: number;
}
