import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetCategoriesTeamIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=teamId" })
  teamId: string;
}


export class GetCategoriesTeamIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetCategoriesTeamIdPathParams;
}


export class GetCategoriesTeamIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata({ elemType: shared.CategoryInfo })
  categoryInfos?: shared.CategoryInfo[];

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  errorResponseContent?: shared.ErrorResponseContent;

  @SpeakeasyMetadata()
  statusCode: number;
}
