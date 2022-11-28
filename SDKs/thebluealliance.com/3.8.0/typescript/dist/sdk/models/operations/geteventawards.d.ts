import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetEventAwardsPathParams extends SpeakeasyBase {
    eventKey: string;
}
export declare class GetEventAwardsHeaders extends SpeakeasyBase {
    ifModifiedSince?: string;
}
export declare class GetEventAwardsSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class GetEventAwardsRequest extends SpeakeasyBase {
    pathParams: GetEventAwardsPathParams;
    headers: GetEventAwardsHeaders;
    security: GetEventAwardsSecurity;
}
export declare class GetEventAwardsResponse extends SpeakeasyBase {
    awards?: shared.Award[];
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
}
