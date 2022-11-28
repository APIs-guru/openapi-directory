import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMyFollowsCategoriesCategorySubcategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subcategory" })
  subcategory: string;
}


export class GetMyFollowsCategoriesCategorySubcategorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFollowsCategoriesCategorySubcategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetMyFollowsCategoriesCategorySubcategoryPathParams;

  @SpeakeasyMetadata()
  security: GetMyFollowsCategoriesCategorySubcategorySecurity;
}


export class GetMyFollowsCategoriesCategorySubcategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
