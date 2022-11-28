import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiLocationConstituencyIdGeometryPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdGeometryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiLocationConstituencyIdGeometryPathParams;
}


export class GetApiLocationConstituencyIdGeometryResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  stringItem?: shared.StringItem;
}
