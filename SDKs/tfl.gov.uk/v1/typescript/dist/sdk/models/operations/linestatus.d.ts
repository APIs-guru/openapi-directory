import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class LineStatusPathParams extends SpeakeasyBase {
    endDate: string;
    startDate: string;
    ids: string[];
}
export declare class LineStatusQueryParams extends SpeakeasyBase {
    dateRangeEndDate?: Date;
    dateRangeStartDate?: Date;
    detail?: boolean;
    endDate: string;
    startDate: string;
}
export declare class LineStatusRequest extends SpeakeasyBase {
    pathParams: LineStatusPathParams;
    queryParams: LineStatusQueryParams;
}
export declare class LineStatusResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesLines?: shared.TflApiPresentationEntitiesLine[];
}
