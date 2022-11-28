import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetObservationsByCodePathParams extends SpeakeasyBase {
    code: string;
    userId: number;
}
export declare class GetObservationsByCodeRequest extends SpeakeasyBase {
    pathParams: GetObservationsByCodePathParams;
}
export declare class GetObservationsByCodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
