import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodRegionPathParams extends SpeakeasyBase {
    country: string;
    ondemandId: number;
}
export declare class GetVodRegionRequest extends SpeakeasyBase {
    pathParams: GetVodRegionPathParams;
}
export declare class GetVodRegionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandRegion?: shared.OnDemandRegion;
}
