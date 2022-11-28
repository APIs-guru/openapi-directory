import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserGetResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    userDto?: shared.UserDto;
}
