import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UserApiGetEventsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}

export enum UserApiGetEventsRelationshipTypeEnum {
    Interested = "Interested"
,    Attending = "Attending"
}


export class UserApiGetEventsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=relationshipType" })
  relationshipType: UserApiGetEventsRelationshipTypeEnum;
}


export class UserApiGetEventsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UserApiGetEventsPathParams;

  @Metadata()
  queryParams: UserApiGetEventsQueryParams;
}


export class UserApiGetEventsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata({ elemType: shared.ReleaseEventForApiContract })
  releaseEventForApiContracts?: shared.ReleaseEventForApiContract[];

  @Metadata()
  statusCode: number;
}
