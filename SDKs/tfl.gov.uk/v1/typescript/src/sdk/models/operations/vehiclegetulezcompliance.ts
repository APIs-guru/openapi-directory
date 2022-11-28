import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VehicleGetUlezComplianceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vrm" })
  vrm: string;
}


export class VehicleGetUlezComplianceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VehicleGetUlezComplianceQueryParams;
}


export class VehicleGetUlezComplianceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesVehicleMatch?: shared.TflApiPresentationEntitiesVehicleMatch;
}
