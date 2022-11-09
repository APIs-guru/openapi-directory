import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VehicleGetEmissionsSurchargeComplianceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=vrm" })
  vrm: string;
}


export class VehicleGetEmissionsSurchargeComplianceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VehicleGetEmissionsSurchargeComplianceQueryParams;
}


export class VehicleGetEmissionsSurchargeComplianceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesVehicleMatch?: shared.TflApiPresentationEntitiesVehicleMatch;
}
