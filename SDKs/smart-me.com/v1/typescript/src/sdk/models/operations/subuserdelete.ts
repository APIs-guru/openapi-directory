import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SubUserDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class SubUserDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: SubUserDeletePathParams;
}


export class SubUserDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
