import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteCategoriesTeamIdCategoryIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class DeleteCategoriesTeamIdCategoryIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteCategoriesTeamIdCategoryIdPathParams;
}


export class DeleteCategoriesTeamIdCategoryIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
