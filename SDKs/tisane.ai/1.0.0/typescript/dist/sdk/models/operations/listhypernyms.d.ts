import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListHypernymsQueryParams extends SpeakeasyBase {
    family?: string;
    maxLevel?: string;
}
export declare class ListHypernymsRequest extends SpeakeasyBase {
    queryParams: ListHypernymsQueryParams;
}
export declare class ListHypernymsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    listHypernyms200ApplicationJsonArrays?: number[][];
}
