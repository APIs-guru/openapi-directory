import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AcceptChangeRequestPathParams extends SpeakeasyBase {
    changeRequestId: number;
}
export declare enum AcceptChangeRequestRequestBodyStatusEnum {
    PendingDeployment = "pending deployment",
    Deployed = "deployed"
}
export declare class AcceptChangeRequestRequestBody extends SpeakeasyBase {
    status?: AcceptChangeRequestRequestBodyStatusEnum;
}
export declare enum AcceptChangeRequest200ApplicationJsonActionEnum {
    AcceptChangeRequest = "acceptChangeRequest"
}
export declare class AcceptChangeRequest200ApplicationJsonData extends SpeakeasyBase {
    rules: shared.ChangeRequest[];
}
export declare enum AcceptChangeRequest200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class AcceptChangeRequest200ApplicationJson extends SpeakeasyBase {
    action: AcceptChangeRequest200ApplicationJsonActionEnum;
    data: AcceptChangeRequest200ApplicationJsonData;
    result: AcceptChangeRequest200ApplicationJsonResultEnum;
}
export declare class AcceptChangeRequestRequest extends SpeakeasyBase {
    pathParams: AcceptChangeRequestPathParams;
    request: AcceptChangeRequestRequestBody;
}
export declare class AcceptChangeRequestResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    acceptChangeRequest200ApplicationJsonObject?: AcceptChangeRequest200ApplicationJson;
}
