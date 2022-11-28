import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum TflApiPresentationEntitiesVehicleMatchComplianceEnum {
    NotAvailable = "NotAvailable",
    NotCompliant = "NotCompliant",
    Compliant = "Compliant",
    Exempt = "Exempt"
}


export class TflApiPresentationEntitiesVehicleMatch extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=colour" })
  colour?: string;

  @SpeakeasyMetadata({ data: "json, name=compliance" })
  compliance?: TflApiPresentationEntitiesVehicleMatchComplianceEnum;

  @SpeakeasyMetadata({ data: "json, name=make" })
  make?: string;

  @SpeakeasyMetadata({ data: "json, name=model" })
  model?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=vrm" })
  vrm?: string;
}
