import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateAchFundingRequestPathParams extends SpeakeasyBase {
    sourceAccountId: string;
}
export declare class CreateAchFundingRequestRequest extends SpeakeasyBase {
    pathParams: CreateAchFundingRequestPathParams;
    request: shared.FundingRequestV1;
}
export declare class CreateAchFundingRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse404?: any;
}
