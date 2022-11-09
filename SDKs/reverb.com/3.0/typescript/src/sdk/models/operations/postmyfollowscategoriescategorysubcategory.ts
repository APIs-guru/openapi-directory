import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostMyFollowsCategoriesCategorySubcategoryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=category" })
  category: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=subcategory" })
  subcategory: string;
}


export class PostMyFollowsCategoriesCategorySubcategorySecurity extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth2: shared.SchemeOauth2;
}


export class PostMyFollowsCategoriesCategorySubcategoryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostMyFollowsCategoriesCategorySubcategoryPathParams;

  @Metadata()
  security: PostMyFollowsCategoriesCategorySubcategorySecurity;
}


export class PostMyFollowsCategoriesCategorySubcategoryResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
