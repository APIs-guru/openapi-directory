import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class UserResponseData extends SpeakeasyBase {
    user: User;
}
export declare class UserResponse extends SpeakeasyBase {
    data: UserResponseData;
}
