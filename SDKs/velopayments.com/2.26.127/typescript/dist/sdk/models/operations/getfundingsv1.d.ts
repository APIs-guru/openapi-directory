import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetFundingsV1QueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
    payorId: string;
    sort?: string;
}
export declare class GetFundingsV1Request extends SpeakeasyBase {
    queryParams: GetFundingsV1QueryParams;
}
export declare class GetFundingsV1Response extends SpeakeasyBase {
    contentType: string;
    getFundingsResponse?: shared.GetFundingsResponse;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
