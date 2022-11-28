import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum GetHealthcheckResult200ApplicationJsonActionEnum {
    GetHealthcheckResult = "getHealthcheckResult"
}
export declare enum GetHealthcheckResult200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetHealthcheckResult200ApplicationJson extends SpeakeasyBase {
    action: GetHealthcheckResult200ApplicationJsonActionEnum;
    data: shared.Check[];
    result: GetHealthcheckResult200ApplicationJsonResultEnum;
}
export declare class GetHealthcheckResultResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getHealthcheckResult200ApplicationJsonObject?: GetHealthcheckResult200ApplicationJson;
}
