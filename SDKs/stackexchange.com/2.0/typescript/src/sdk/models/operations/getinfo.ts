import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetInfoQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=site" })
  site: string;
}


export class GetInfoRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetInfoQueryParams;
}


export class GetInfoResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
