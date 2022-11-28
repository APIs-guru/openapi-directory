import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAvailableObservationHeadingsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetAvailableObservationHeadingsRequest extends SpeakeasyBase {
    pathParams: GetAvailableObservationHeadingsPathParams;
}
export declare class GetAvailableObservationHeadingsResponse extends SpeakeasyBase {
    contentType: string;
    observationHeadings?: shared.ObservationHeading[];
    statusCode: number;
}
