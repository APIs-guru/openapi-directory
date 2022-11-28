import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserLikedVideoAlt1PathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class CheckIfUserLikedVideoAlt1Request extends SpeakeasyBase {
    pathParams: CheckIfUserLikedVideoAlt1PathParams;
}
export declare class CheckIfUserLikedVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
}
