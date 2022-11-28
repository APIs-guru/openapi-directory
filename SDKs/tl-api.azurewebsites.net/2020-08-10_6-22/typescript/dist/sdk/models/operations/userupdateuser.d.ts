import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserUpdateUserQueryParams extends SpeakeasyBase {
    accountNumber?: string;
    externalEntityNumber?: string;
    guardian?: number;
    gymNumber?: string;
    introduceBy?: number;
    name?: string;
    number?: string;
    typeId?: number;
    userId?: number;
}
export declare class UserUpdateUserRequest extends SpeakeasyBase {
    queryParams: UserUpdateUserQueryParams;
}
export declare class UserUpdateUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
