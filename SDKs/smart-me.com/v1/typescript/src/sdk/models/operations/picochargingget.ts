import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class PicoChargingGetPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PicoChargingGetRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: PicoChargingGetPathParams;
}


export class PicoChargingGetResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  picoChargingData?: shared.PicoChargingData;

  @Metadata()
  statusCode: number;
}
