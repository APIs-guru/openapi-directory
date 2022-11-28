import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPatientEnteredObservationHeadingsPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetPatientEnteredObservationHeadingsRequest extends SpeakeasyBase {
    pathParams: GetPatientEnteredObservationHeadingsPathParams;
}
export declare class GetPatientEnteredObservationHeadingsResponse extends SpeakeasyBase {
    contentType: string;
    observationHeadings?: shared.ObservationHeading[];
    statusCode: number;
}
