import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ChangeRequestDetailsPathParams extends SpeakeasyBase {
    changeRequestId: number;
}
export declare enum ChangeRequestDetails200ApplicationJsonActionEnum {
    ChangeRequestDetails = "changeRequestDetails"
}
export declare class ChangeRequestDetails200ApplicationJsonData extends SpeakeasyBase {
    rules: shared.ChangeRequest[];
}
export declare enum ChangeRequestDetails200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ChangeRequestDetails200ApplicationJson extends SpeakeasyBase {
    action: ChangeRequestDetails200ApplicationJsonActionEnum;
    data: ChangeRequestDetails200ApplicationJsonData;
    result: ChangeRequestDetails200ApplicationJsonResultEnum;
}
export declare class ChangeRequestDetailsRequest extends SpeakeasyBase {
    pathParams: ChangeRequestDetailsPathParams;
}
export declare class ChangeRequestDetailsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    changeRequestDetails200ApplicationJsonObject?: ChangeRequestDetails200ApplicationJson;
}
