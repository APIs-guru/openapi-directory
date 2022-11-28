import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetFamilyDetailsQueryParams extends SpeakeasyBase {
    id?: string;
}
export declare class GetFamilyDetails200ApplicationJson extends SpeakeasyBase {
    definition?: string;
    description?: string;
    hypernyms?: number[][];
    permId?: string;
    requestId?: string;
    wikidata?: string;
    wordnet30?: string;
}
export declare class GetFamilyDetailsRequest extends SpeakeasyBase {
    queryParams: GetFamilyDetailsQueryParams;
}
export declare class GetFamilyDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getFamilyDetails200ApplicationJsonObject?: GetFamilyDetails200ApplicationJson;
}
