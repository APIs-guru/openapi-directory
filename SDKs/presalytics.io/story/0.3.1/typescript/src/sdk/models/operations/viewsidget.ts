import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ViewsIdGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=view_id" })
  viewId: string;
}


export class ViewsIdGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ViewsIdGetPathParams;
}


export class ViewsIdGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;

  @Metadata()
  view?: shared.View;
}
