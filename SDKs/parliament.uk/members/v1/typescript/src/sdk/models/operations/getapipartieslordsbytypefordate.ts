import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiPartiesLordsByTypeForDatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=forDate" })
  forDate: Date;
}


export class GetApiPartiesLordsByTypeForDateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiPartiesLordsByTypeForDatePathParams;
}


export class GetApiPartiesLordsByTypeForDateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  lordsByTypeMembersServiceSearchResult?: shared.LordsByTypeMembersServiceSearchResult;

  @SpeakeasyMetadata()
  statusCode: number;
}
