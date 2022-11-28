import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiPartiesGetActiveHousePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=house" })
  house: number;
}


export class GetApiPartiesGetActiveHouseRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiPartiesGetActiveHousePathParams;
}


export class GetApiPartiesGetActiveHouseResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partyMembersServiceSearchResult?: shared.PartyMembersServiceSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
