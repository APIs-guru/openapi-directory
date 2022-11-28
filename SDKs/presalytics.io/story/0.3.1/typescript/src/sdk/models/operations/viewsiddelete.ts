import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ViewsIdDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=view_id" })
  viewId: string;
}


export class ViewsIdDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ViewsIdDeletePathParams;
}


export class ViewsIdDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  problemDetail?: any;
}
