import { SpeakeasyBase } from "../../../internal/utils";
export declare class ChangeEmailRequestBody extends SpeakeasyBase {
    address: string;
}
export declare class ChangeEmailRequest extends SpeakeasyBase {
    request: ChangeEmailRequestBody;
}
export declare class ChangeEmailResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
