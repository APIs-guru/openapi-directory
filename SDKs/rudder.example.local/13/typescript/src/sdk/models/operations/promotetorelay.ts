import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PromoteToRelayPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class PromoteToRelayRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PromoteToRelayPathParams;
}

export enum PromoteToRelay200ApplicationJsonActionEnum {
    PromoteToRelay = "promoteToRelay"
}

export enum PromoteToRelay200ApplicationJsonResultEnum {
    Success = "success"
,    Error = "error"
}


export class PromoteToRelay200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action: PromoteToRelay200ApplicationJsonActionEnum;

  @Metadata({ data: "json, name=data" })
  data: string;

  @Metadata({ data: "json, name=result" })
  result: PromoteToRelay200ApplicationJsonResultEnum;
}


export class PromoteToRelayResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  promoteToRelay200ApplicationJsonObject?: PromoteToRelay200ApplicationJson;
}
