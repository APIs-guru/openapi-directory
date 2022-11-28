import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UserApiGetSongListsPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum UserApiGetSongListsFieldsEnum {
    None = "None",
    Description = "Description",
    Events = "Events",
    MainPicture = "MainPicture",
    Tags = "Tags"
}
export declare enum UserApiGetSongListsNameMatchModeEnum {
    Auto = "Auto",
    Partial = "Partial",
    StartsWith = "StartsWith",
    Exact = "Exact",
    Words = "Words"
}
export declare enum UserApiGetSongListsSortEnum {
    None = "None",
    Name = "Name",
    Date = "Date",
    CreateDate = "CreateDate"
}
export declare class UserApiGetSongListsQueryParams extends SpeakeasyBase {
    childTags?: boolean;
    fields?: UserApiGetSongListsFieldsEnum;
    getTotalCount?: boolean;
    maxResults?: number;
    nameMatchMode?: UserApiGetSongListsNameMatchModeEnum;
    query?: string;
    sort?: UserApiGetSongListsSortEnum;
    start?: number;
    tagId?: number[];
}
export declare class UserApiGetSongListsRequest extends SpeakeasyBase {
    pathParams: UserApiGetSongListsPathParams;
    queryParams: UserApiGetSongListsQueryParams;
}
export declare class UserApiGetSongListsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    partialFindResultSongListForApiContract?: shared.PartialFindResultSongListForApiContract;
    statusCode: number;
}
