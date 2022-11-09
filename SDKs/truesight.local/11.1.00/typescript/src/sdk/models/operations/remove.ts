import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class RemovePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class RemoveQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=monitorClass" })
  monitorClass: string;

  @Metadata({ data: "queryParam, style=form;explode=true;name=monitorSid" })
  monitorSid: string;
}


export class RemoveRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemovePathParams;

  @Metadata()
  queryParams: RemoveQueryParams;
}


export class RemoveResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
