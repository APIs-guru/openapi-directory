import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiLocationConstituencyIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiLocationConstituencyIdPathParams;
}


export class GetApiLocationConstituencyIdResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  constituencyItem?: shared.ConstituencyItem;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
