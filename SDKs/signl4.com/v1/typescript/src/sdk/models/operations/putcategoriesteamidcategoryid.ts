import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutCategoriesTeamIdCategoryIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=categoryId" })
  categoryId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PutCategoriesTeamIdCategoryIdRequestsInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/*+json" })
  categoryInfo?: shared.CategoryInfoInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  categoryInfo1?: shared.CategoryInfoInput;

  @SpeakeasyMetadata({ data: "request, media_type=application/json-patch+json" })
  categoryInfo2?: shared.CategoryInfoInput;

  @SpeakeasyMetadata({ data: "request, media_type=text/json" })
  categoryInfo3?: shared.CategoryInfoInput;
}


export class PutCategoriesTeamIdCategoryIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutCategoriesTeamIdCategoryIdPathParams;

  @SpeakeasyMetadata()
  request?: PutCategoriesTeamIdCategoryIdRequestsInput;
}


export class PutCategoriesTeamIdCategoryIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  categoryInfo?: shared.CategoryInfo;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
