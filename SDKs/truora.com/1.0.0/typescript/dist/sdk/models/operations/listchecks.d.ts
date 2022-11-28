import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListChecksQueryParams extends SpeakeasyBase {
    reportId?: string;
    startKey?: string;
}
export declare class ListChecksSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ListChecksRequest extends SpeakeasyBase {
    queryParams: ListChecksQueryParams;
    security: ListChecksSecurity;
}
export declare class ListChecksResponse extends SpeakeasyBase {
    checksOutput?: shared.ChecksOutput;
    contentType: string;
    statusCode: number;
}
