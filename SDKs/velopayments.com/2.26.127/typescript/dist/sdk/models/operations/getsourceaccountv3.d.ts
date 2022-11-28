import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSourceAccountV3PathParams extends SpeakeasyBase {
    sourceAccountId: string;
}
export declare class GetSourceAccountV3Request extends SpeakeasyBase {
    pathParams: GetSourceAccountV3PathParams;
}
export declare class GetSourceAccountV3Response extends SpeakeasyBase {
    contentType: string;
    sourceAccountResponseV3?: shared.SourceAccountResponseV3;
    statusCode: number;
    inlineResponse400?: any;
    inlineResponse401?: any;
    inlineResponse403?: any;
    inlineResponse404?: any;
}
