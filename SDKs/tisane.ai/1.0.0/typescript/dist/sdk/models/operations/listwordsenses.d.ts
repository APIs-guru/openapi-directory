import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListWordSensesQueryParams extends SpeakeasyBase {
    language?: string;
    word?: string;
}
export declare class ListWordSenses200ApplicationJsonFamilies extends SpeakeasyBase {
    key?: number;
    value?: Map<string, any>;
    definition?: string;
}
export declare class ListWordSenses200ApplicationJsonFeatures extends SpeakeasyBase {
    index?: number;
    value?: string;
}
export declare class ListWordSenses200ApplicationJson extends SpeakeasyBase {
    families?: ListWordSenses200ApplicationJsonFamilies[];
    features?: ListWordSenses200ApplicationJsonFeatures[];
    frequency?: number;
    isLemma?: boolean;
    legacyMapId?: number;
    lemma?: string;
    lexemeId?: number;
}
export declare class ListWordSensesRequest extends SpeakeasyBase {
    queryParams: ListWordSensesQueryParams;
}
export declare class ListWordSensesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listWordSenses200ApplicationJsonObjects?: ListWordSenses200ApplicationJson[];
}
