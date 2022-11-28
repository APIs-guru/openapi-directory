import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOneApplicationPathParams extends SpeakeasyBase {
    applicationId: string;
}
export declare class GetOneApplicationRequest extends SpeakeasyBase {
    pathParams: GetOneApplicationPathParams;
}
export declare class GetOneApplicationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
