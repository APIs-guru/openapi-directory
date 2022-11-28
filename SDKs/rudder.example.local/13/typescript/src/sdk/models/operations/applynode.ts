import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ApplyNodePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class ApplyNodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ApplyNodePathParams;
}


export class ApplyNodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  applyNode200TextPlainString?: string;
}
