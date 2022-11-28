import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiMembersIdRegisteredInterestsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiMembersIdRegisteredInterestsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiMembersIdRegisteredInterestsPathParams;
}


export class GetApiMembersIdRegisteredInterestsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  registeredInterestCategoryListItem?: shared.RegisteredInterestCategoryListItem;

  @SpeakeasyMetadata()
  statusCode: number;
}
