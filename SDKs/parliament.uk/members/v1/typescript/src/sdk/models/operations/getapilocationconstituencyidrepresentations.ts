import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetApiLocationConstituencyIdRepresentationsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class GetApiLocationConstituencyIdRepresentationsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetApiLocationConstituencyIdRepresentationsPathParams;
}


export class GetApiLocationConstituencyIdRepresentationsResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  constituencyRepresentationListItem?: shared.ConstituencyRepresentationListItem;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
