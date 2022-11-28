import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetMeReputationQueryParams extends SpeakeasyBase {
    callback?: string;
    filter?: string;
    site: string;
}
export declare class GetMeReputationRequest extends SpeakeasyBase {
    queryParams: GetMeReputationQueryParams;
}
export declare class GetMeReputationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
