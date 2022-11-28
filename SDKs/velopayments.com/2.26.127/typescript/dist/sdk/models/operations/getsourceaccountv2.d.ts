import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSourceAccountV2PathParams extends SpeakeasyBase {
    sourceAccountId: string;
}
export declare class GetSourceAccountV2Request extends SpeakeasyBase {
    pathParams: GetSourceAccountV2PathParams;
}
export declare class GetSourceAccountV2Response extends SpeakeasyBase {
    contentType: string;
    sourceAccountResponseV2?: shared.SourceAccountResponseV2;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
