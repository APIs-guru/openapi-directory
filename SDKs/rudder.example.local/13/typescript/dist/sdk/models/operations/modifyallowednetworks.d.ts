import { SpeakeasyBase } from "../../../internal/utils";
export declare class ModifyAllowedNetworksPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare class ModifyAllowedNetworksRequestBodyAllowedNetworks extends SpeakeasyBase {
    add?: any[];
    delete?: any[];
}
export declare class ModifyAllowedNetworksRequestBody extends SpeakeasyBase {
    allowedNetworks?: ModifyAllowedNetworksRequestBodyAllowedNetworks;
}
export declare enum ModifyAllowedNetworks200ApplicationJsonActionEnum {
    ModifySetting = "modifySetting"
}
/**
 * Information about the allowed_networks settings
**/
export declare class ModifyAllowedNetworks200ApplicationJsonData extends SpeakeasyBase {
    allowedNetworks?: any[];
}
export declare enum ModifyAllowedNetworks200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class ModifyAllowedNetworks200ApplicationJson extends SpeakeasyBase {
    action: ModifyAllowedNetworks200ApplicationJsonActionEnum;
    data: ModifyAllowedNetworks200ApplicationJsonData;
    result: ModifyAllowedNetworks200ApplicationJsonResultEnum;
}
export declare class ModifyAllowedNetworksRequest extends SpeakeasyBase {
    pathParams: ModifyAllowedNetworksPathParams;
    request: ModifyAllowedNetworksRequestBody;
}
export declare class ModifyAllowedNetworksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    modifyAllowedNetworks200ApplicationJsonObject?: ModifyAllowedNetworks200ApplicationJson;
}
