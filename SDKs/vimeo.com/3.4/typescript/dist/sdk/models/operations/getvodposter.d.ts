import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetVodPosterPathParams extends SpeakeasyBase {
    ondemandId: number;
    posterId: number;
}
export declare class GetVodPosterRequest extends SpeakeasyBase {
    pathParams: GetVodPosterPathParams;
}
export declare class GetVodPosterResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
