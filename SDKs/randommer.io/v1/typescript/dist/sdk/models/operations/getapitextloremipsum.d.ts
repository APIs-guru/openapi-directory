import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiTextLoremIpsumQueryParams extends SpeakeasyBase {
    loremType: shared.LoremTypeEnum;
    number: number;
    type: shared.TextTypeEnum;
}
export declare class GetApiTextLoremIpsumHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiTextLoremIpsumRequest extends SpeakeasyBase {
    queryParams: GetApiTextLoremIpsumQueryParams;
    headers: GetApiTextLoremIpsumHeaders;
}
export declare class GetApiTextLoremIpsumResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
