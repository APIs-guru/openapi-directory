import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetApiCardQueryParams extends SpeakeasyBase {
    type?: string;
}
export declare class GetApiCardHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiCardRequest extends SpeakeasyBase {
    queryParams: GetApiCardQueryParams;
    headers: GetApiCardHeaders;
}
export declare class GetApiCardResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
