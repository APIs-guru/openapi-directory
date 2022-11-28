import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetShopsIdStorefrontsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetShopsIdStorefrontsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetShopsIdStorefrontsPathParams;
}


export class GetShopsIdStorefrontsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
