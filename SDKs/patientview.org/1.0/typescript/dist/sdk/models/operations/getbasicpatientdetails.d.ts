import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetBasicPatientDetailsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetBasicPatientDetailsRequest extends SpeakeasyBase {
    pathParams: GetBasicPatientDetailsPathParams;
}
export declare class GetBasicPatientDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
