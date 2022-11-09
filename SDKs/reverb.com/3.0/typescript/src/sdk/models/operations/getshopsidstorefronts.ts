import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetShopsIdStorefrontsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetShopsIdStorefrontsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetShopsIdStorefrontsPathParams;
}


export class GetShopsIdStorefrontsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
