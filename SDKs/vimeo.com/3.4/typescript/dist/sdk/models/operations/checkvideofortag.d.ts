import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CheckVideoForTagPathParams extends SpeakeasyBase {
    videoId: number;
    word: string;
}
export declare class CheckVideoForTagRequest extends SpeakeasyBase {
    pathParams: CheckVideoForTagPathParams;
}
export declare class CheckVideoForTagResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    tag?: shared.Tag;
}
