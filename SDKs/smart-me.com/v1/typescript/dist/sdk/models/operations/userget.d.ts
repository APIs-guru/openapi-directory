import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    user?: shared.User;
}
