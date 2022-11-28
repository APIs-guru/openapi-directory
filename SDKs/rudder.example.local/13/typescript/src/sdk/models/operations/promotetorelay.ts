import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PromoteToRelayPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}

export enum PromoteToRelay200ApplicationJsonActionEnum {
    PromoteToRelay = "promoteToRelay"
}

export enum PromoteToRelay200ApplicationJsonResultEnum {
    Success = "success",
    Error = "error"
}


export class PromoteToRelay200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action: PromoteToRelay200ApplicationJsonActionEnum;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result: PromoteToRelay200ApplicationJsonResultEnum;
}


export class PromoteToRelayRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PromoteToRelayPathParams;
}


export class PromoteToRelayResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  promoteToRelay200ApplicationJsonObject?: PromoteToRelay200ApplicationJson;
}
