import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetApiNameSuggestionsQueryParams extends SpeakeasyBase {
    startingWords: string;
}
export declare class GetApiNameSuggestionsHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiNameSuggestionsRequest extends SpeakeasyBase {
    queryParams: GetApiNameSuggestionsQueryParams;
    headers: GetApiNameSuggestionsHeaders;
}
export declare class GetApiNameSuggestionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
