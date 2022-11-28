import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PutUserFollowsPeoplePersonIdPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=person_id" })
  personId: number;
}


export class PutUserFollowsPeoplePersonIdRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PutUserFollowsPeoplePersonIdPathParams;
}


export class PutUserFollowsPeoplePersonIdResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  personFollow?: shared.PersonFollow;

  @SpeakeasyMetadata()
  statusCode: number;
}
