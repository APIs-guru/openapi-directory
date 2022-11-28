import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AccidentStatsGetPathParams extends SpeakeasyBase {
    year: number;
}
export declare class AccidentStatsGetRequest extends SpeakeasyBase {
    pathParams: AccidentStatsGetPathParams;
}
export declare class AccidentStatsGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tflApiPresentationEntitiesAccidentStatsAccidentDetails?: shared.TflApiPresentationEntitiesAccidentStatsAccidentDetail[];
}
