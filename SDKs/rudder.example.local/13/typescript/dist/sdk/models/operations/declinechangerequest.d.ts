import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeclineChangeRequestPathParams extends SpeakeasyBase {
    changeRequestId: number;
}
export declare enum DeclineChangeRequest200ApplicationJsonActionEnum {
    DeclineChangeRequest = "declineChangeRequest"
}
export declare class DeclineChangeRequest200ApplicationJsonData extends SpeakeasyBase {
    rules: shared.ChangeRequest[];
}
export declare enum DeclineChangeRequest200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class DeclineChangeRequest200ApplicationJson extends SpeakeasyBase {
    action: DeclineChangeRequest200ApplicationJsonActionEnum;
    data: DeclineChangeRequest200ApplicationJsonData;
    result: DeclineChangeRequest200ApplicationJsonResultEnum;
}
export declare class DeclineChangeRequestRequest extends SpeakeasyBase {
    pathParams: DeclineChangeRequestPathParams;
}
export declare class DeclineChangeRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    declineChangeRequest200ApplicationJsonObject?: DeclineChangeRequest200ApplicationJson;
}
