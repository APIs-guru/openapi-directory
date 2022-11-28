import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3StopAmenityDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=car_parking" })
  carParking?: string;

  @SpeakeasyMetadata({ data: "json, name=cctv" })
  cctv?: boolean;

  @SpeakeasyMetadata({ data: "json, name=taxi_rank" })
  taxiRank?: boolean;

  @SpeakeasyMetadata({ data: "json, name=toilet" })
  toilet?: boolean;
}
