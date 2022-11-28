import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFundingsV4QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId: string;
    sort?: string;
}
export declare class GetFundingsV4Request extends SpeakeasyBase {
    queryParams: GetFundingsV4QueryParams;
}
export declare class GetFundingsV4Response extends SpeakeasyBase {
    contentType: string;
    getFundingsResponse?: shared.GetFundingsResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
