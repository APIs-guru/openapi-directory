import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetUsersQueryParams extends SpeakeasyBase {
    userId?: string;
}
export declare class GetUsersRequest extends SpeakeasyBase {
    queryParams: GetUsersQueryParams;
}
export declare class GetUsersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    users?: shared.User[];
}
