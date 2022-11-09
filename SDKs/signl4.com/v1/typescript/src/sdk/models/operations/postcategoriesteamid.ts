import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PostCategoriesTeamIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class PostCategoriesTeamIdRequests extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/*+json" })
  categoryInfo?: shared.CategoryInfo;

  @Metadata({ data: "request, media_type=application/json" })
  categoryInfo1?: shared.CategoryInfo;

  @Metadata({ data: "request, media_type=application/json-patch+json" })
  categoryInfo2?: shared.CategoryInfo;

  @Metadata({ data: "request, media_type=text/json" })
  categoryInfo3?: shared.CategoryInfo;
}


export class PostCategoriesTeamIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PostCategoriesTeamIdPathParams;

  @Metadata()
  request?: PostCategoriesTeamIdRequests;
}


export class PostCategoriesTeamIdResponse extends SpeakeasyBase {
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
