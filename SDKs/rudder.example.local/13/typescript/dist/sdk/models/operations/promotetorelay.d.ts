import { SpeakeasyBase } from "../../../internal/utils";
export declare class PromoteToRelayPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare enum PromoteToRelay200ApplicationJsonActionEnum {
    PromoteToRelay = "promoteToRelay"
}
export declare enum PromoteToRelay200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class PromoteToRelay200ApplicationJson extends SpeakeasyBase {
    action: PromoteToRelay200ApplicationJsonActionEnum;
    data: string;
    result: PromoteToRelay200ApplicationJsonResultEnum;
}
export declare class PromoteToRelayRequest extends SpeakeasyBase {
    pathParams: PromoteToRelayPathParams;
}
export declare class PromoteToRelayResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    promoteToRelay200ApplicationJsonObject?: PromoteToRelay200ApplicationJson;
}
