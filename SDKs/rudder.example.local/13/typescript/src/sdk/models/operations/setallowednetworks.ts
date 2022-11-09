import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SetAllowedNetworksPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class SetAllowedNetworksRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: Map<string, any>;
}


export class SetAllowedNetworksRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SetAllowedNetworksPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: SetAllowedNetworksRequestBody;
}

export enum SetAllowedNetworks200ApplicationJsonActionEnum {
    ModifyAllowedNetworks = "modifyAllowedNetworks"
}


// SetAllowedNetworks200ApplicationJsonData
/** 
 * Information about the allowed_networks settings
**/
export class SetAllowedNetworks200ApplicationJsonData extends SpeakeasyBase {
  @Metadata({ data: "json, name=allowed_networks" })
  allowedNetworks?: any[];
}

export enum SetAllowedNetworks200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class SetAllowedNetworks200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: SetAllowedNetworks200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: SetAllowedNetworks200ApplicationJsonData;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=result" })
  result: SetAllowedNetworks200ApplicationJsonResultEnum;
}


export class SetAllowedNetworksResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  setAllowedNetworks200ApplicationJsonObject?: SetAllowedNetworks200ApplicationJson;
}
