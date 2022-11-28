import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ViewsIdGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=view_id" })
  viewId: string;
}


export class ViewsIdGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ViewsIdGetPathParams;
}


export class ViewsIdGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;

  @SpeakeasyMetadata()
  view?: shared.View;
}
