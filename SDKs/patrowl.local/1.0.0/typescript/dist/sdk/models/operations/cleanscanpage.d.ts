import { SpeakeasyBase } from "../../../internal/utils";
export declare class CleanScanPagePathParams extends SpeakeasyBase {
    scanId: number;
}
export declare class CleanScanPageRequest extends SpeakeasyBase {
    pathParams: CleanScanPagePathParams;
}
export declare class CleanScanPageResponse extends SpeakeasyBase {
    apiResponse?: any;
    contentType: string;
    statusCode: number;
}
