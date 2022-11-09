import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ResetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class ResetQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=monitorClass" })
  monitorClass: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monitorSid" })
  monitorSid: string;
}


export class ResetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ResetPathParams;

  @Metadata()
  queryParams: ResetQueryParams;
}


export class ResetResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
