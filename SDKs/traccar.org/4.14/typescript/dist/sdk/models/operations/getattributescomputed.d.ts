import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAttributesComputedQueryParams extends SpeakeasyBase {
    all?: boolean;
    deviceId?: number;
    groupId?: number;
    refresh?: boolean;
    userId?: number;
}
export declare class GetAttributesComputedRequest extends SpeakeasyBase {
    queryParams: GetAttributesComputedQueryParams;
}
export declare class GetAttributesComputedResponse extends SpeakeasyBase {
    attributes?: shared.Attribute[];
    contentType: string;
    statusCode: number;
}
