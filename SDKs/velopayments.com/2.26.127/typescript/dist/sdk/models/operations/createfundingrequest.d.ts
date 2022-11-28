import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFundingRequestPathParams extends SpeakeasyBase {
    sourceAccountId: string;
}
export declare class CreateFundingRequestRequest extends SpeakeasyBase {
    pathParams: CreateFundingRequestPathParams;
    request: shared.FundingRequestV2;
}
export declare class CreateFundingRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
