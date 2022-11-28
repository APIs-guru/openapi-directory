import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateFundingAccountV2Request extends SpeakeasyBase {
    request?: shared.CreateFundingAccountRequestV2;
}
export declare class CreateFundingAccountV2Response extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
}
