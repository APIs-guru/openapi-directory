import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetCategoriesProductTypeCategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=product_type" })
  productType: string;
}


export class GetCategoriesProductTypeCategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoriesProductTypeCategoryPathParams;
}


export class GetCategoriesProductTypeCategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
