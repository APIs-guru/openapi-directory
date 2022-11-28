import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetAllowedNetworksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}

export enum GetAllowedNetworks200ApplicationJsonActionEnum {
    GetAllowedNetworks = "getAllowedNetworks"
}


export class GetAllowedNetworks200ApplicationJsonDataSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_networks" })
  allowedNetworks: any[];
}


// GetAllowedNetworks200ApplicationJsonData
/** 
 * Information about the allowed_networks settings
**/
export class GetAllowedNetworks200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=settings" })
  settings: GetAllowedNetworks200ApplicationJsonDataSettings;
}

export enum GetAllowedNetworks200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class GetAllowedNetworks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: GetAllowedNetworks200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: GetAllowedNetworks200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: GetAllowedNetworks200ApplicationJsonResultEnum;
}


export class GetAllowedNetworksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAllowedNetworksPathParams;
}


export class GetAllowedNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAllowedNetworks200ApplicationJsonObject?: GetAllowedNetworks200ApplicationJson;
}
