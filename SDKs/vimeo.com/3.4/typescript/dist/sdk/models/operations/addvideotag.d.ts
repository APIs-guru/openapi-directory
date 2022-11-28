import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddVideoTagPathParams extends SpeakeasyBase {
    videoId: number;
    word: string;
}
export declare class AddVideoTagSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
}
export declare class AddVideoTagRequest extends SpeakeasyBase {
    pathParams: AddVideoTagPathParams;
    security: AddVideoTagSecurity;
}
export declare class AddVideoTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    tag?: shared.Tag;
}
