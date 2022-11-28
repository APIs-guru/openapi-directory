import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetPatientEnteredObservationsByCodePathParams extends SpeakeasyBase {
    code: string;
    userId: number;
}
export declare class GetPatientEnteredObservationsByCodeRequest extends SpeakeasyBase {
    pathParams: GetPatientEnteredObservationsByCodePathParams;
}
export declare class GetPatientEnteredObservationsByCodeResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
