import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetApiLocationConstituencyIdRepresentationsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdRepresentationsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetApiLocationConstituencyIdRepresentationsPathParams;
}


export class GetApiLocationConstituencyIdRepresentationsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  constituencyRepresentationListItem?: shared.ConstituencyRepresentationListItem;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
