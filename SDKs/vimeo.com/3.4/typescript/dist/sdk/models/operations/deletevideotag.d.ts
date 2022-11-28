import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteVideoTagPathParams extends SpeakeasyBase {
    videoId: number;
    word: string;
}
export declare class DeleteVideoTagSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class DeleteVideoTagRequest extends SpeakeasyBase {
    pathParams: DeleteVideoTagPathParams;
    security: DeleteVideoTagSecurity;
}
export declare class DeleteVideoTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
