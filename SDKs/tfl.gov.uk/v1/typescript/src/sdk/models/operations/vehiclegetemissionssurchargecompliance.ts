import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class VehicleGetEmissionsSurchargeComplianceQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=vrm" })
  vrm: string;
}


export class VehicleGetEmissionsSurchargeComplianceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: VehicleGetEmissionsSurchargeComplianceQueryParams;
}


export class VehicleGetEmissionsSurchargeComplianceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  tflApiPresentationEntitiesVehicleMatch?: shared.TflApiPresentationEntitiesVehicleMatch;
}
