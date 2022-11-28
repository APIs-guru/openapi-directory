import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class UserApiGetEventsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetEventsRelationshipTypeEnum {
    Interested = "Interested",
    Attending = "Attending"
}


export class UserApiGetEventsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=relationshipType" })
  relationshipType: UserApiGetEventsRelationshipTypeEnum;
}


export class UserApiGetEventsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UserApiGetEventsPathParams;

  @SpeakeasyMetadata()
  queryParams: UserApiGetEventsQueryParams;
}


export class UserApiGetEventsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.ReleaseEventForApiContract })
  releaseEventForApiContracts?: shared.ReleaseEventForApiContract[];

  @SpeakeasyMetadata()
  statusCode: number;
}
