import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVodRegionPathParams extends SpeakeasyBase {
    country: string;
    ondemandId: number;
}
export declare class AddVodRegionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVodRegionRequest extends SpeakeasyBase {
    pathParams: AddVodRegionPathParams;
    security: AddVodRegionSecurity;
}
export declare class AddVodRegionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    onDemandRegion?: shared.OnDemandRegion;
}
