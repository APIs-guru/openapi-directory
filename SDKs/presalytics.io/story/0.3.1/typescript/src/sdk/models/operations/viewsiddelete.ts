import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ViewsIdDeletePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=view_id" })
  viewId: string;
}


export class ViewsIdDeleteRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ViewsIdDeletePathParams;
}


export class ViewsIdDeleteResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  problemDetail?: any;
}
