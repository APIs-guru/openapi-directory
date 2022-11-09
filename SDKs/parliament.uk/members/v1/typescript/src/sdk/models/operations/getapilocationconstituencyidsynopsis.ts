import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiLocationConstituencyIdSynopsisPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdSynopsisRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiLocationConstituencyIdSynopsisPathParams;
}


export class GetApiLocationConstituencyIdSynopsisResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stringItem?: shared.StringItem;
}
