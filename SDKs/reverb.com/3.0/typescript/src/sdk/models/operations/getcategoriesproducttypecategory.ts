import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCategoriesProductTypeCategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=product_type" })
  productType: string;
}


export class GetCategoriesProductTypeCategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoriesProductTypeCategoryPathParams;
}


export class GetCategoriesProductTypeCategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
