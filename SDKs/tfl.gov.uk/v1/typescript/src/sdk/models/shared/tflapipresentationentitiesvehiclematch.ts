import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum TflApiPresentationEntitiesVehicleMatchComplianceEnum {
    NotAvailable = "NotAvailable"
,    NotCompliant = "NotCompliant"
,    Compliant = "Compliant"
,    Exempt = "Exempt"
}


export class TflApiPresentationEntitiesVehicleMatch extends SpeakeasyBase {
  @Metadata({ data: "json, name=colour" })
  colour?: string;

  @Metadata({ data: "json, name=compliance" })
  compliance?: TflApiPresentationEntitiesVehicleMatchComplianceEnum;

  @Metadata({ data: "json, name=make" })
  make?: string;

  @Metadata({ data: "json, name=model" })
  model?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;

  @Metadata({ data: "json, name=vrm" })
  vrm?: string;
}
