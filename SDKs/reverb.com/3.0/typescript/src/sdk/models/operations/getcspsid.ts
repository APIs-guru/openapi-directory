import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCspsIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCspsIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCspsIdPathParams;
}


export class GetCspsIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
