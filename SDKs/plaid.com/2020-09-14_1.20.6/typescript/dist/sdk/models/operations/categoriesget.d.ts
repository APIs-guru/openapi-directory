import { SpeakeasyBase } from "../../../internal/utils";
export declare class CategoriesGetRequest extends SpeakeasyBase {
    request: Map<string, any>;
}
export declare class CategoriesGetResponse extends SpeakeasyBase {
    categoriesGetResponse?: Map<string, any>;
    contentType: string;
    error?: Map<string, any>;
    statusCode: number;
}
