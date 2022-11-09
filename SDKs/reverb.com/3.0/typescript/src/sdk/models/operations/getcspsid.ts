import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetCspsIdPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class GetCspsIdRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetCspsIdPathParams;
}


export class GetCspsIdResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
