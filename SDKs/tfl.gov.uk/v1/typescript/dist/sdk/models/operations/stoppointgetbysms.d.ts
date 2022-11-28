import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopPointGetBySmsPathParams extends SpeakeasyBase {
    id: string;
}
export declare class StopPointGetBySmsQueryParams extends SpeakeasyBase {
    output?: string;
}
export declare class StopPointGetBySmsRequest extends SpeakeasyBase {
    pathParams: StopPointGetBySmsPathParams;
    queryParams: StopPointGetBySmsQueryParams;
}
export declare class StopPointGetBySmsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    systemObject?: Map<string, any>;
}
