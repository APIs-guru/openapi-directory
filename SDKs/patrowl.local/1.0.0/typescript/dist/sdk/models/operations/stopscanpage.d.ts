import { SpeakeasyBase } from "../../../internal/utils";
export declare class StopScanPagePathParams extends SpeakeasyBase {
    scanId: number;
}
export declare class StopScanPageRequest extends SpeakeasyBase {
    pathParams: StopScanPagePathParams;
}
export declare class StopScanPageResponse extends SpeakeasyBase {
    apiResponse?: any;
    contentType: string;
    statusCode: number;
}
