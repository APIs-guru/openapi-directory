import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetAllowedNetworksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class GetAllowedNetworksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetAllowedNetworksPathParams;
}

export enum GetAllowedNetworks200ApplicationJsonActionEnum {
    GetAllowedNetworks = "getAllowedNetworks"
}


export class GetAllowedNetworks200ApplicationJsonDataSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_networks" })
  allowedNetworks: any[];
}


// GetAllowedNetworks200ApplicationJsonData
/** 
 * Information about the allowed_networks settings
**/
export class GetAllowedNetworks200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=settings" })
  settings: GetAllowedNetworks200ApplicationJsonDataSettings;
}

export enum GetAllowedNetworks200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class GetAllowedNetworks200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: GetAllowedNetworks200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: GetAllowedNetworks200ApplicationJsonData;

  @Metadata({ data: "json, name=id" })
  id: string;

  @Metadata({ data: "json, name=result" })
  result: GetAllowedNetworks200ApplicationJsonResultEnum;
}


export class GetAllowedNetworksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getAllowedNetworks200ApplicationJsonObject?: GetAllowedNetworks200ApplicationJson;
}
