import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DevicesPutPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class DevicesPutQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=switchNumber" })
  switchNumber?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=switchState" })
  switchState: boolean;
}


export class DevicesPutRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DevicesPutPathParams;

  @Metadata()
  queryParams: DevicesPutQueryParams;
}


export class DevicesPutResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  object?: Map<string, any>;

  @Metadata()
  statusCode: number;
}
