import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodBackgroundPathParams extends SpeakeasyBase {
    backgroundId: number;
    ondemandId: number;
}
export declare class GetVodBackgroundRequest extends SpeakeasyBase {
    pathParams: GetVodBackgroundPathParams;
}
export declare class GetVodBackgroundResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    legacyError?: shared.LegacyError;
    picture?: shared.Picture;
}
