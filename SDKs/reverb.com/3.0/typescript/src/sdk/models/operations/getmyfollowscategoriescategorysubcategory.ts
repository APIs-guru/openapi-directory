import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetMyFollowsCategoriesCategorySubcategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subcategory" })
  subcategory: string;
}


export class GetMyFollowsCategoriesCategorySubcategorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class GetMyFollowsCategoriesCategorySubcategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetMyFollowsCategoriesCategorySubcategoryPathParams;

  @Metadata()
  security: GetMyFollowsCategoriesCategorySubcategorySecurity;
}


export class GetMyFollowsCategoriesCategorySubcategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
