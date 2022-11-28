import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetSalesSlugPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=slug" })
  slug: string;
}


export class GetSalesSlugRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetSalesSlugPathParams;
}


export class GetSalesSlugResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
