import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetListingsSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetListingsSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetListingsSlugPathParams;
}


export class GetListingsSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
