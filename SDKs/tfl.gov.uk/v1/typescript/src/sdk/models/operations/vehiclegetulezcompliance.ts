import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class VehicleGetUlezComplianceQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=vrm" })
  vrm: string;
}


export class VehicleGetUlezComplianceRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: VehicleGetUlezComplianceQueryParams;
}


export class VehicleGetUlezComplianceResponse extends SpeakeasyBase {
  @Metadata()
  body?: Uint8Array;

  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  tflApiPresentationEntitiesVehicleMatch?: shared.TflApiPresentationEntitiesVehicleMatch;
}
