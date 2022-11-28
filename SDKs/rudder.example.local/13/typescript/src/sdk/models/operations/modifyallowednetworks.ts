import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ModifyAllowedNetworksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class ModifyAllowedNetworksRequestBodyAllowedNetworks extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=add" })
  add?: any[];

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: any[];
}


export class ModifyAllowedNetworksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_networks" })
  allowedNetworks?: ModifyAllowedNetworksRequestBodyAllowedNetworks;
}

export enum ModifyAllowedNetworks200ApplicationJsonActionEnum {
    ModifySetting = "modifySetting"
}


// ModifyAllowedNetworks200ApplicationJsonData
/** 
 * Information about the allowed_networks settings
**/
export class ModifyAllowedNetworks200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_networks" })
  allowedNetworks?: any[];
}

export enum ModifyAllowedNetworks200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class ModifyAllowedNetworks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: ModifyAllowedNetworks200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: ModifyAllowedNetworks200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: ModifyAllowedNetworks200ApplicationJsonResultEnum;
}


export class ModifyAllowedNetworksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ModifyAllowedNetworksPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: ModifyAllowedNetworksRequestBody;
}


export class ModifyAllowedNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  modifyAllowedNetworks200ApplicationJsonObject?: ModifyAllowedNetworks200ApplicationJson;
}
