import { SpeakeasyBase } from "../../../internal/utils";
import { TagBaseContract } from "./tagbasecontract";
import { EntryThumbForApiContract } from "./entrythumbforapicontract";
import { LocalizedStringWithIdContract } from "./localizedstringwithidcontract";
import { EnglishTranslatedStringContract } from "./englishtranslatedstringcontract";
import { WebLinkForApiContract } from "./weblinkforapicontract";
export declare enum TagForApiContractDefaultNameLanguageEnum {
    Unspecified = "Unspecified",
    Japanese = "Japanese",
    Romaji = "Romaji",
    English = "English"
}
export declare enum TagForApiContractStatusEnum {
    Draft = "Draft",
    Finished = "Finished",
    Approved = "Approved",
    Locked = "Locked"
}
export declare class TagForApiContract extends SpeakeasyBase {
    additionalNames?: string;
    aliasedTo?: TagBaseContract;
    categoryName?: string;
    createDate?: Date;
    defaultNameLanguage?: TagForApiContractDefaultNameLanguageEnum;
    description?: string;
    id?: number;
    mainPicture?: EntryThumbForApiContract;
    name?: string;
    names?: LocalizedStringWithIdContract[];
    parent?: TagBaseContract;
    relatedTags?: TagBaseContract[];
    status?: TagForApiContractStatusEnum;
    targets?: number;
    translatedDescription?: EnglishTranslatedStringContract;
    urlSlug?: string;
    usageCount?: number;
    version?: number;
    webLinks?: WebLinkForApiContract[];
}
