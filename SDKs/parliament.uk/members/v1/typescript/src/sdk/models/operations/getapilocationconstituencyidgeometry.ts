import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiLocationConstituencyIdGeometryPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdGeometryRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiLocationConstituencyIdGeometryPathParams;
}


export class GetApiLocationConstituencyIdGeometryResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  stringItem?: shared.StringItem;
}
