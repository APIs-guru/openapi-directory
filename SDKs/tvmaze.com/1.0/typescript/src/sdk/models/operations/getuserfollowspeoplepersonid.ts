import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetUserFollowsPeoplePersonIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=person_id" })
  personId: number;
}


export class GetUserFollowsPeoplePersonIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetUserFollowsPeoplePersonIdPathParams;
}


export class GetUserFollowsPeoplePersonIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personFollow?: shared.PersonFollow;

  @SpeakeasyMetadata()
  statusCode: number;
}
