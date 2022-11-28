import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SetVodRegionsPathParams extends SpeakeasyBase {
    ondemandId: number;
}
export declare class SetVodRegionsRequestBody extends SpeakeasyBase {
    countries: string[];
}
export declare class SetVodRegionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class SetVodRegionsRequest extends SpeakeasyBase {
    pathParams: SetVodRegionsPathParams;
    request: SetVodRegionsRequestBody;
    security: SetVodRegionsSecurity;
}
export declare class SetVodRegionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandRegion?: shared.OnDemandRegion;
}
