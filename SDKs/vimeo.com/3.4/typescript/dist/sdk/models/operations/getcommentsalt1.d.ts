import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCommentsAlt1PathParams extends SpeakeasyBase {
    channelId: number;
    videoId: number;
}
export declare enum GetCommentsAlt1DirectionEnum {
    Asc = "asc",
    Desc = "desc"
}
export declare class GetCommentsAlt1QueryParams extends SpeakeasyBase {
    direction?: GetCommentsAlt1DirectionEnum;
    page?: number;
    perPage?: number;
}
export declare class GetCommentsAlt1Request extends SpeakeasyBase {
    pathParams: GetCommentsAlt1PathParams;
    queryParams: GetCommentsAlt1QueryParams;
}
export declare class GetCommentsAlt1Response extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    comments?: shared.Comment[];
}
