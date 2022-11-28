import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListHyponymsQueryParams extends SpeakeasyBase {
    family?: string;
    maxLevel?: string;
}
export declare class ListHyponymsRequest extends SpeakeasyBase {
    queryParams: ListHyponymsQueryParams;
}
export declare class ListHyponymsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
