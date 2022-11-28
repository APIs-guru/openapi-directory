import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRegionPathParams extends SpeakeasyBase {
    country: string;
}
export declare class GetRegionRequest extends SpeakeasyBase {
    pathParams: GetRegionPathParams;
}
export declare class GetRegionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandRegion?: shared.OnDemandRegion;
}
