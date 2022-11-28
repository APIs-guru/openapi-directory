import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoFromVodPathParams extends SpeakeasyBase {
    ondemandId: number;
    videoId: number;
}
export declare class DeleteVideoFromVodSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoFromVodRequest extends SpeakeasyBase {
    pathParams: DeleteVideoFromVodPathParams;
    security: DeleteVideoFromVodSecurity;
}
export declare class DeleteVideoFromVodResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
