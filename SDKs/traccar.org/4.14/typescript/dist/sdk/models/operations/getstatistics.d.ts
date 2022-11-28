import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStatisticsQueryParams extends SpeakeasyBase {
    from: Date;
    to: Date;
}
export declare class GetStatisticsRequest extends SpeakeasyBase {
    queryParams: GetStatisticsQueryParams;
}
export declare class GetStatisticsResponse extends SpeakeasyBase {
    contentType: string;
    statistics?: shared.Statistics[];
    statusCode: number;
}
