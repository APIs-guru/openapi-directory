import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCurrentUserResponse extends SpeakeasyBase {
    contentType: string;
    currentUser?: shared.CurrentUser;
    statusCode: number;
}
