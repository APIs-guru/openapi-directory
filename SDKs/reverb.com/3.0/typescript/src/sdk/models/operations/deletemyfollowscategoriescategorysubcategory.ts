import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DeleteMyFollowsCategoriesCategorySubcategoryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=subcategory" })
  subcategory: string;
}


export class DeleteMyFollowsCategoriesCategorySubcategorySecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsCategoriesCategorySubcategoryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DeleteMyFollowsCategoriesCategorySubcategoryPathParams;

  @SpeakeasyMetadata()
  security: DeleteMyFollowsCategoriesCategorySubcategorySecurity;
}


export class DeleteMyFollowsCategoriesCategorySubcategoryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
