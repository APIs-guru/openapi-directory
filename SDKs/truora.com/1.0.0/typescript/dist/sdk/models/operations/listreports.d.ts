import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ListReportsQueryParams extends SpeakeasyBase {
    startKey?: string;
    username?: string;
}
export declare class ListReportsRequest extends SpeakeasyBase {
    queryParams: ListReportsQueryParams;
}
export declare class ListReportsResponse extends SpeakeasyBase {
    contentType: string;
    reportsOutput?: shared.ReportsOutput;
    statusCode: number;
}
