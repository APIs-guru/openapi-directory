import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TflApiPresentationEntitiesDisruptedPoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=additionalInformation" })
  additionalInformation?: string;

  @Metadata({ data: "json, name=appearance" })
  appearance?: string;

  @Metadata({ data: "json, name=atcoCode" })
  atcoCode?: string;

  @Metadata({ data: "json, name=commonName" })
  commonName?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @Metadata({ data: "json, name=mode" })
  mode?: string;

  @Metadata({ data: "json, name=stationAtcoCode" })
  stationAtcoCode?: string;

  @Metadata({ data: "json, name=toDate" })
  toDate?: Date;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
