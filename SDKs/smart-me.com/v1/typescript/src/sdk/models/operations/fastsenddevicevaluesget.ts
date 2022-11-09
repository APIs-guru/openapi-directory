import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class FastSendDeviceValuesGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class FastSendDeviceValuesGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: FastSendDeviceValuesGetPathParams;
}


export class FastSendDeviceValuesGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
