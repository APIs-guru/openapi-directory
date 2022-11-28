import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum LineRouteSequenceDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound",
    All = "all"
}
export declare class LineRouteSequencePathParams extends SpeakeasyBase {
    direction: LineRouteSequenceDirectionEnum;
    id: string;
}
export declare enum LineRouteSequenceServiceTypesEnum {
    Regular = "Regular",
    Night = "Night"
}
export declare class LineRouteSequenceQueryParams extends SpeakeasyBase {
    excludeCrowding?: boolean;
    serviceTypes?: LineRouteSequenceServiceTypesEnum[];
}
export declare class LineRouteSequenceRequest extends SpeakeasyBase {
    pathParams: LineRouteSequencePathParams;
    queryParams: LineRouteSequenceQueryParams;
}
export declare class LineRouteSequenceResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesRouteSequence?: shared.TflApiPresentationEntitiesRouteSequence;
}
