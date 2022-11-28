import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetDistributionsQueryParams extends SpeakeasyBase {
    surveyId: string;
}
export declare class GetDistributionsRequest extends SpeakeasyBase {
    queryParams: GetDistributionsQueryParams;
}
export declare class GetDistributionsResponse extends SpeakeasyBase {
    contentType: string;
    distributionsResponse?: shared.DistributionsResponse;
    statusCode: number;
}
