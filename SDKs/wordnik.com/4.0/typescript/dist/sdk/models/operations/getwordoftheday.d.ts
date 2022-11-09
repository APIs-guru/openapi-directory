import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare class GetWordOfTheDayQueryParams extends SpeakeasyBase {
    date?: string;
}
export declare class GetWordOfTheDayRequest extends SpeakeasyBase {
    queryParams: GetWordOfTheDayQueryParams;
}
export declare class GetWordOfTheDayResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
}
