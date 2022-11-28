import { SpeakeasyBase } from "../../../internal/utils";
export declare class SetAllowedNetworksPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class SetAllowedNetworksRequestBody extends SpeakeasyBase {
    value?: Map<string, any>;
}
export declare enum SetAllowedNetworks200ApplicationJsonActionEnum {
    ModifyAllowedNetworks = "modifyAllowedNetworks"
}
/**
 * Information about the allowed_networks settings
**/
export declare class SetAllowedNetworks200ApplicationJsonData extends SpeakeasyBase {
    allowedNetworks?: any[];
}
export declare enum SetAllowedNetworks200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class SetAllowedNetworks200ApplicationJson extends SpeakeasyBase {
    action: SetAllowedNetworks200ApplicationJsonActionEnum;
    data: SetAllowedNetworks200ApplicationJsonData;
    id?: string;
    result: SetAllowedNetworks200ApplicationJsonResultEnum;
}
export declare class SetAllowedNetworksRequest extends SpeakeasyBase {
    pathParams: SetAllowedNetworksPathParams;
    request: SetAllowedNetworksRequestBody;
}
export declare class SetAllowedNetworksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    setAllowedNetworks200ApplicationJsonObject?: SetAllowedNetworks200ApplicationJson;
}
