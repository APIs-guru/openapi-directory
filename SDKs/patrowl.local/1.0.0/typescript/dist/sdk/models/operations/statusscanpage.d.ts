import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class StatusScanPagePathParams extends SpeakeasyBase {
    scanId: number;
}
export declare class StatusScanPageRequest extends SpeakeasyBase {
    pathParams: StatusScanPagePathParams;
}
export declare class StatusScanPageResponse extends SpeakeasyBase {
    apiResponse?: any;
    contentType: string;
    statusCode: number;
}
