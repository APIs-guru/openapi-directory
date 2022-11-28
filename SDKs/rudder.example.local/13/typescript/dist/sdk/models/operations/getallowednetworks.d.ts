import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetAllowedNetworksPathParams extends SpeakeasyBase {
    nodeId: string;
}
export declare enum GetAllowedNetworks200ApplicationJsonActionEnum {
    GetAllowedNetworks = "getAllowedNetworks"
}
export declare class GetAllowedNetworks200ApplicationJsonDataSettings extends SpeakeasyBase {
    allowedNetworks: any[];
}
/**
 * Information about the allowed_networks settings
**/
export declare class GetAllowedNetworks200ApplicationJsonData extends SpeakeasyBase {
    settings: GetAllowedNetworks200ApplicationJsonDataSettings;
}
export declare enum GetAllowedNetworks200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}
export declare class GetAllowedNetworks200ApplicationJson extends SpeakeasyBase {
    action: GetAllowedNetworks200ApplicationJsonActionEnum;
    data: GetAllowedNetworks200ApplicationJsonData;
    id: string;
    result: GetAllowedNetworks200ApplicationJsonResultEnum;
}
export declare class GetAllowedNetworksRequest extends SpeakeasyBase {
    pathParams: GetAllowedNetworksPathParams;
}
export declare class GetAllowedNetworksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAllowedNetworks200ApplicationJsonObject?: GetAllowedNetworks200ApplicationJson;
}
