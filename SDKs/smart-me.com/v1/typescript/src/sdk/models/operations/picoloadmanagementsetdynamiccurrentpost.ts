import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class PicoLoadmanagementSetDynamicCurrentPostPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serial" })
  serial: number;
}


export class PicoLoadmanagementSetDynamicCurrentPostQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=current" })
  current: number;
}


export class PicoLoadmanagementSetDynamicCurrentPostRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PicoLoadmanagementSetDynamicCurrentPostPathParams;

  @Metadata()
  queryParams: PicoLoadmanagementSetDynamicCurrentPostQueryParams;
}


export class PicoLoadmanagementSetDynamicCurrentPostResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
