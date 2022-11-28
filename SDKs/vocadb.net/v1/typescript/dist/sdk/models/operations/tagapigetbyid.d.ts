import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TagApiGetByIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare enum TagApiGetByIdFieldsEnum {
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
export declare enum TagApiGetByIdLangEnum {
    Default = "Default",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare class TagApiGetByIdQueryParams extends SpeakeasyBase {
    fields?: TagApiGetByIdFieldsEnum;
    lang?: TagApiGetByIdLangEnum;
}
export declare class TagApiGetByIdRequest extends SpeakeasyBase {
    pathParams: TagApiGetByIdPathParams;
    queryParams: TagApiGetByIdQueryParams;
}
export declare class TagApiGetByIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    tagForApiContract?: shared.TagForApiContract;
}
