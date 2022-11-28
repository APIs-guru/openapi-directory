import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetPicturesAlt1QueryParams extends SpeakeasyBase {
    page?: number;
    perPage?: number;
}
export declare class GetPicturesAlt1Request extends SpeakeasyBase {
    queryParams: GetPicturesAlt1QueryParams;
}
export declare class GetPicturesAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    pictures?: shared.Picture[];
}
