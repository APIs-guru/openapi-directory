import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPartiesGetActiveHousePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=house" })
  house: number;
}


export class GetApiPartiesGetActiveHouseRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiPartiesGetActiveHousePathParams;
}


export class GetApiPartiesGetActiveHouseResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partyMembersServiceSearchResult?: shared.PartyMembersServiceSearchResult;

  @Metadata()
  statusCode: number;
}
