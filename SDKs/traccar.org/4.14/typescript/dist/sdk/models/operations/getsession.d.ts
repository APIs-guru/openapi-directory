import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSessionQueryParams extends SpeakeasyBase {
    token?: string;
}
export declare class GetSessionRequest extends SpeakeasyBase {
    queryParams: GetSessionQueryParams;
}
export declare class GetSessionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
