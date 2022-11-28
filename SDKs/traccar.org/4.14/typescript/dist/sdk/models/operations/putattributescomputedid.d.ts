import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutAttributesComputedIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class PutAttributesComputedIdRequest extends SpeakeasyBase {
    pathParams: PutAttributesComputedIdPathParams;
    request: shared.Attribute;
}
export declare class PutAttributesComputedIdResponse extends SpeakeasyBase {
    attribute?: shared.Attribute;
    contentType: string;
    statusCode: number;
}
