import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetContentRatingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    contentRatings?: shared.ContentRating[];
}
