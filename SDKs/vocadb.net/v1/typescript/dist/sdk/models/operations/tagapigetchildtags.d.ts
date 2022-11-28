import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagApiGetChildTagsPathParams extends SpeakeasyBase {
    tagId: number;
}
export declare enum TagApiGetChildTagsFieldsEnum {
    None = "None",
    AdditionalNames = "AdditionalNames",
    AliasedTo = "AliasedTo",
    Description = "Description",
    MainPicture = "MainPicture",
    Names = "Names",
    Parent = "Parent",
    RelatedTags = "RelatedTags",
    TranslatedDescription = "TranslatedDescription",
    WebLinks = "WebLinks"
}
export declare enum TagApiGetChildTagsLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class TagApiGetChildTagsQueryParams extends SpeakeasyBase {
    fields?: TagApiGetChildTagsFieldsEnum;
    lang?: TagApiGetChildTagsLangEnum;
}
export declare class TagApiGetChildTagsRequest extends SpeakeasyBase {
    pathParams: TagApiGetChildTagsPathParams;
    queryParams: TagApiGetChildTagsQueryParams;
}
export declare class TagApiGetChildTagsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tagForApiContracts?: shared.TagForApiContract[];
}
