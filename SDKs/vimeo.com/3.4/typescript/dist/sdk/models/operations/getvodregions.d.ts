import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodRegionsPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class GetVodRegionsRequest extends SpeakeasyBase {
    pathParams: GetVodRegionsPathParams;
}
export declare class GetVodRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandRegions?: shared.OnDemandRegion[];
}
