import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PostMyFollowsCategoriesCategorySubcategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subcategory" })
  subcategory: string;
}


export class PostMyFollowsCategoriesCategorySubcategorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsCategoriesCategorySubcategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PostMyFollowsCategoriesCategorySubcategoryPathParams;

  @SpeakeasyMetadata()
  security: PostMyFollowsCategoriesCategorySubcategorySecurity;
}


export class PostMyFollowsCategoriesCategorySubcategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
