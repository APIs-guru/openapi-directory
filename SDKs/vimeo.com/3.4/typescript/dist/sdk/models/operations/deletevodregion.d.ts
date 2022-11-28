import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVodRegionPathParams extends SpeakeasyBase {
    country: string;
    ondemandId: number;
}
export declare class DeleteVodRegionSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVodRegionRequest extends SpeakeasyBase {
    pathParams: DeleteVodRegionPathParams;
    security: DeleteVodRegionSecurity;
}
export declare class DeleteVodRegionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
