import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBasicUserInformationPathParams extends SpeakeasyBase {
    token: string;
}
export declare class GetBasicUserInformationRequest extends SpeakeasyBase {
    pathParams: GetBasicUserInformationPathParams;
}
export declare class GetBasicUserInformationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
