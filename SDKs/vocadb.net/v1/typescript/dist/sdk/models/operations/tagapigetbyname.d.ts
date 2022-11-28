import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagApiGetByNamePathParams extends SpeakeasyBase {
    name: string;
}
export declare enum TagApiGetByNameFieldsEnum {
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
export declare enum TagApiGetByNameLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class TagApiGetByNameQueryParams extends SpeakeasyBase {
    fields?: TagApiGetByNameFieldsEnum;
    lang?: TagApiGetByNameLangEnum;
}
export declare class TagApiGetByNameRequest extends SpeakeasyBase {
    pathParams: TagApiGetByNamePathParams;
    queryParams: TagApiGetByNameQueryParams;
}
export declare class TagApiGetByNameResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tagForApiContract?: shared.TagForApiContract;
}
