import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteMyFollowsCategoriesCategorySubcategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subcategory" })
  subcategory: string;
}


export class DeleteMyFollowsCategoriesCategorySubcategorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class DeleteMyFollowsCategoriesCategorySubcategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteMyFollowsCategoriesCategorySubcategoryPathParams;

  @Metadata()
  security: DeleteMyFollowsCategoriesCategorySubcategorySecurity;
}


export class DeleteMyFollowsCategoriesCategorySubcategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
