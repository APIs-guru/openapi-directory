import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutCategoriesTeamIdCategoryIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PutCategoriesTeamIdCategoryIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  categoryInfo?: shared.CategoryInfo;

  @Metadata({ data: "request, media_type=application/json" })
  categoryInfo1?: shared.CategoryInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  categoryInfo2?: shared.CategoryInfo;

  @Metadata({ data: "request, media_type=text/json" })
  categoryInfo3?: shared.CategoryInfo;
}


export class PutCategoriesTeamIdCategoryIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutCategoriesTeamIdCategoryIdPathParams;

  @Metadata()
  request?: PutCategoriesTeamIdCategoryIdRequests;
}


export class PutCategoriesTeamIdCategoryIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  categoryInfo?: shared.CategoryInfo;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
