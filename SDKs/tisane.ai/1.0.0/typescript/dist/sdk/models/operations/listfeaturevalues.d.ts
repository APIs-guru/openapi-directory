import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListFeatureValuesQueryParams extends SpeakeasyBase {
    description?: string;
    language?: string;
    type?: string;
}
export declare class ListFeatureValuesRequest extends SpeakeasyBase {
    queryParams: ListFeatureValuesQueryParams;
}
export declare class ListFeatureValuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listFeatureValues200ApplicationJsonStrings?: string[];
}
