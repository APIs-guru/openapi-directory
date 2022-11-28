import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPictureAlt1PathParams extends SpeakeasyBase {
    portraitsetId: number;
}
export declare class GetPictureAlt1Request extends SpeakeasyBase {
    pathParams: GetPictureAlt1PathParams;
}
export declare class GetPictureAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    picture?: shared.Picture;
}
