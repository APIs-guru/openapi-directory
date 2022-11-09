import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ApplyNodePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=nodeId" })
  nodeId: string;
}


export class ApplyNodeRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ApplyNodePathParams;
}


export class ApplyNodeResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  applyNode200TextPlainString?: string;
}
