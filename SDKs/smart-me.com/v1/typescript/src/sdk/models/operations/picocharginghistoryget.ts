import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PicoChargingHistoryGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=id" })
  id: string;
}


export class PicoChargingHistoryGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PicoChargingHistoryGetPathParams;
}


export class PicoChargingHistoryGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata({ elemType: shared.PicoChargingHistoryData })
  picoChargingHistoryData?: shared.PicoChargingHistoryData[];

  @SpeakeasyMetadata()
  statusCode: number;
}
