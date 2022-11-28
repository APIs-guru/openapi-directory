import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TflApiPresentationEntitiesDisruptedPoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=additionalInformation" })
  additionalInformation?: string;

  @SpeakeasyMetadata({ data: "json, name=appearance" })
  appearance?: string;

  @SpeakeasyMetadata({ data: "json, name=atcoCode" })
  atcoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=commonName" })
  commonName?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=fromDate" })
  fromDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=mode" })
  mode?: string;

  @SpeakeasyMetadata({ data: "json, name=stationAtcoCode" })
  stationAtcoCode?: string;

  @SpeakeasyMetadata({ data: "json, name=toDate" })
  toDate?: Date;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
