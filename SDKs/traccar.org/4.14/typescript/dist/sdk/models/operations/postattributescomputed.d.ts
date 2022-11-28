import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostAttributesComputedRequest extends SpeakeasyBase {
    request: shared.Attribute;
}
export declare class PostAttributesComputedResponse extends SpeakeasyBase {
    attribute?: shared.Attribute;
    contentType: string;
    statusCode: number;
}
