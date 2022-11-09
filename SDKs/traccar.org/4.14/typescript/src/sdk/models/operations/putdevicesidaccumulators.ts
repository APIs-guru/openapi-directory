import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PutDevicesIdAccumulatorsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: number;
}


export class PutDevicesIdAccumulatorsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PutDevicesIdAccumulatorsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.DeviceAccumulators;
}


export class PutDevicesIdAccumulatorsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;
}
