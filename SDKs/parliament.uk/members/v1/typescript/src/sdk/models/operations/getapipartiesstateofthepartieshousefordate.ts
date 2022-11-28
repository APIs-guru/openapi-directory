import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiPartiesStateOfThePartiesHouseForDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=forDate" })
  forDate: Date;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=house" })
  house: number;
}


export class GetApiPartiesStateOfThePartiesHouseForDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiPartiesStateOfThePartiesHouseForDatePathParams;
}


export class GetApiPartiesStateOfThePartiesHouseForDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  partySeatCountMembersServiceSearchResult?: shared.PartySeatCountMembersServiceSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
