import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RefreshSourcePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class RefreshSourceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RefreshSourcePathParams;
}


export class RefreshSourceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
