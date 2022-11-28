import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetApiNameQueryParams extends SpeakeasyBase {
    nameType: shared.NameTypeEnum;
    quantity: number;
}
export declare class GetApiNameHeaders extends SpeakeasyBase {
    xApiKey?: string;
}
export declare class GetApiNameRequest extends SpeakeasyBase {
    queryParams: GetApiNameQueryParams;
    headers: GetApiNameHeaders;
}
export declare class GetApiNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
