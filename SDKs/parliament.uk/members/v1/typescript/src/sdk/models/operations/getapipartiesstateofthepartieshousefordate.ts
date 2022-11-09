import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPartiesStateOfThePartiesHouseForDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=forDate" })
  forDate: Date;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=house" })
  house: number;
}


export class GetApiPartiesStateOfThePartiesHouseForDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiPartiesStateOfThePartiesHouseForDatePathParams;
}


export class GetApiPartiesStateOfThePartiesHouseForDateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  partySeatCountMembersServiceSearchResult?: shared.PartySeatCountMembersServiceSearchResult;

  @Metadata()
  statusCode: number;
}
