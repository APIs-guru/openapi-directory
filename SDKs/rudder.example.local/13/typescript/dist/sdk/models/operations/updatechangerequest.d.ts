import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateChangeRequestPathParams extends SpeakeasyBase {
    changeRequestId: number;
}
export declare class UpdateChangeRequestRequestBody extends SpeakeasyBase {
    description?: string;
    name?: string;
}
export declare enum UpdateChangeRequest200ApplicationJsonActionEnum {
    UpdateChangeRequest = "updateChangeRequest"
}
export declare class UpdateChangeRequest200ApplicationJsonData extends SpeakeasyBase {
    rules: shared.ChangeRequest[];
}
export declare enum UpdateChangeRequest200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class UpdateChangeRequest200ApplicationJson extends SpeakeasyBase {
    action: UpdateChangeRequest200ApplicationJsonActionEnum;
    data: UpdateChangeRequest200ApplicationJsonData;
    result: UpdateChangeRequest200ApplicationJsonResultEnum;
}
export declare class UpdateChangeRequestRequest extends SpeakeasyBase {
    pathParams: UpdateChangeRequestPathParams;
    request: UpdateChangeRequestRequestBody;
}
export declare class UpdateChangeRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateChangeRequest200ApplicationJsonObject?: UpdateChangeRequest200ApplicationJson;
}
