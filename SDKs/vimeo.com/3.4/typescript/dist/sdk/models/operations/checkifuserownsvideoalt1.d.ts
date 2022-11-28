import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckIfUserOwnsVideoAlt1PathParams extends SpeakeasyBase {
    videoId: number;
}
export declare class CheckIfUserOwnsVideoAlt1Request extends SpeakeasyBase {
    pathParams: CheckIfUserOwnsVideoAlt1PathParams;
}
export declare class CheckIfUserOwnsVideoAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    video?: shared.Video;
}
