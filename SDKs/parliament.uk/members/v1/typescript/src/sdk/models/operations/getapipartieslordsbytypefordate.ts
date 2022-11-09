import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiPartiesLordsByTypeForDatePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=forDate" })
  forDate: Date;
}


export class GetApiPartiesLordsByTypeForDateRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiPartiesLordsByTypeForDatePathParams;
}


export class GetApiPartiesLordsByTypeForDateResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  lordsByTypeMembersServiceSearchResult?: shared.LordsByTypeMembersServiceSearchResult;

  @Metadata()
  statusCode: number;
}
