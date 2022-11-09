import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetCategoriesTeamIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetCategoriesTeamIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCategoriesTeamIdPathParams;
}


export class GetCategoriesTeamIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata({ elemType: shared.CategoryInfo })
  categoryInfos?: shared.CategoryInfo[];

  @Metadata()
  contentType: string;

  @Metadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @Metadata()
  statusCode: number;
}
