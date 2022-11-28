import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSourceAccountPathParams extends SpeakeasyBase {
    sourceAccountId: string;
}
export declare class GetSourceAccountRequest extends SpeakeasyBase {
    pathParams: GetSourceAccountPathParams;
}
export declare class GetSourceAccountResponse extends SpeakeasyBase {
    contentType: string;
    sourceAccountResponse?: shared.SourceAccountResponse;
    statusCode: number;
    inlineResponse401?: any;
    inlineResponse404?: any;
}
