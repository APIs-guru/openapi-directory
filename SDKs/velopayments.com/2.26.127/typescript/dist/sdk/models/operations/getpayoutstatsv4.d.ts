import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPayoutStatsV4QueryParams extends SpeakeasyBase {
    payorId?: string;
}
export declare class GetPayoutStatsV4Request extends SpeakeasyBase {
    queryParams: GetPayoutStatsV4QueryParams;
}
export declare class GetPayoutStatsV4Response extends SpeakeasyBase {
    contentType: string;
    getPayoutStatistics?: shared.GetPayoutStatistics;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
