import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiCardTypesHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiCardTypesRequest extends SpeakeasyBase {
    headers: GetApiCardTypesHeaders;
}
export declare class GetApiCardTypesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
