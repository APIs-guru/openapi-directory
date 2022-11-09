import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetApiTextPasswordQueryParams extends SpeakeasyBase {
    hasDigits: boolean;
    hasSpecial: boolean;
    hasUppercase: boolean;
    length: number;
}
export declare class GetApiTextPasswordHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiTextPasswordRequest extends SpeakeasyBase {
    queryParams: GetApiTextPasswordQueryParams;
    headers: GetApiTextPasswordHeaders;
}
export declare class GetApiTextPasswordResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
