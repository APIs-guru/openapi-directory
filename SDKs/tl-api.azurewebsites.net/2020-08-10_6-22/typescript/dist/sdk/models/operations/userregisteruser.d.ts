import { SpeakeasyBase } from "../../../internal/utils";
export declare class UserRegisterUserQueryParams extends SpeakeasyBase {
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
export declare class UserRegisterUserRequest extends SpeakeasyBase {
    queryParams: UserRegisterUserQueryParams;
}
export declare class UserRegisterUserResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
