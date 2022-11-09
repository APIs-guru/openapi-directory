import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SubUserDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SubUserDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: SubUserDeletePathParams;
}


export class SubUserDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
