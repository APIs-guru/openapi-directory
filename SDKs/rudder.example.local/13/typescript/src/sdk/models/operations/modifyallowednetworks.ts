import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ModifyAllowedNetworksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class ModifyAllowedNetworksRequestBodyAllowedNetworks extends SpeakeasyBase {
  @Metadata({ data: "json, name=add" })
  add?: any[];

  @Metadata({ data: "json, name=delete" })
  delete?: any[];
}


export class ModifyAllowedNetworksRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_networks" })
  allowedNetworks?: ModifyAllowedNetworksRequestBodyAllowedNetworks;
}


export class ModifyAllowedNetworksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ModifyAllowedNetworksPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: ModifyAllowedNetworksRequestBody;
}

export enum ModifyAllowedNetworks200ApplicationJsonActionEnum {
    ModifySetting = "modifySetting"
}


// ModifyAllowedNetworks200ApplicationJsonData
/** 
 * Information about the allowed_networks settings
**/
export class ModifyAllowedNetworks200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_networks" })
  allowedNetworks?: any[];
}

export enum ModifyAllowedNetworks200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class ModifyAllowedNetworks200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: ModifyAllowedNetworks200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: ModifyAllowedNetworks200ApplicationJsonData;

  @Metadata({ data: "json, name=result" })
  result: ModifyAllowedNetworks200ApplicationJsonResultEnum;
}


export class ModifyAllowedNetworksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  modifyAllowedNetworks200ApplicationJsonObject?: ModifyAllowedNetworks200ApplicationJson;
}
