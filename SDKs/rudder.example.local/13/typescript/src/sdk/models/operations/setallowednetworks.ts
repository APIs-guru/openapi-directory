import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SetAllowedNetworksPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class SetAllowedNetworksRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: Map<string, any>;
}

export enum SetAllowedNetworks200ApplicationJsonActionEnum {
    ModifyAllowedNetworks = "modifyAllowedNetworks"
}


// SetAllowedNetworks200ApplicationJsonData
/** 
 * Information about the allowed_networks settings
**/
export class SetAllowedNetworks200ApplicationJsonData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=allowed_networks" })
  allowedNetworks?: any[];
}

export enum SetAllowedNetworks200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class SetAllowedNetworks200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: SetAllowedNetworks200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: SetAllowedNetworks200ApplicationJsonData;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: SetAllowedNetworks200ApplicationJsonResultEnum;
}


export class SetAllowedNetworksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SetAllowedNetworksPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: SetAllowedNetworksRequestBody;
}


export class SetAllowedNetworksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  setAllowedNetworks200ApplicationJsonObject?: SetAllowedNetworks200ApplicationJson;
}
