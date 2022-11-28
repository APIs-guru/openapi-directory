import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RetrievedistributionlinksPathParams extends SpeakeasyBase {
    distributionId: string;
}
export declare class RetrievedistributionlinksQueryParams extends SpeakeasyBase {
    surveyId: string;
}
export declare class RetrievedistributionlinksRequest extends SpeakeasyBase {
    pathParams: RetrievedistributionlinksPathParams;
    queryParams: RetrievedistributionlinksQueryParams;
}
export declare class RetrievedistributionlinksResponse extends SpeakeasyBase {
    contentType: string;
    retrieveDistributionLinksResponse?: shared.RetrieveDistributionLinksResponse;
    statusCode: number;
}
