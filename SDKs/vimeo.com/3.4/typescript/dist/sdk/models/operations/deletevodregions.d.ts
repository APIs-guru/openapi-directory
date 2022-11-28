import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVodRegionsPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class DeleteVodRegionsRequestBody extends SpeakeasyBase {
    countries?: string[];
}
export declare class DeleteVodRegionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVodRegionsRequest extends SpeakeasyBase {
    pathParams: DeleteVodRegionsPathParams;
    request?: DeleteVodRegionsRequestBody;
    security: DeleteVodRegionsSecurity;
}
export declare class DeleteVodRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandRegions?: shared.OnDemandRegion[];
}
