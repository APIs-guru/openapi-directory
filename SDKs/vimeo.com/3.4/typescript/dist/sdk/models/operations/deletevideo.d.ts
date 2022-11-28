import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoPathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class DeleteVideoSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoRequest extends SpeakeasyBase {
    pathParams: DeleteVideoPathParams;
    security: DeleteVideoSecurity;
}
export declare class DeleteVideoResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
