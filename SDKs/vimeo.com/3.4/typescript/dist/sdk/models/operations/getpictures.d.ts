import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPicturesPathParams extends SpeakeasyBase {
    userId: number;
}
export declare class GetPicturesQueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetPicturesRequest extends SpeakeasyBase {
    pathParams: GetPicturesPathParams;
    queryParams: GetPicturesQueryParams;
}
export declare class GetPicturesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pictures?: shared.Picture[];
}
