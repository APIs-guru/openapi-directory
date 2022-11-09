import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3StopAmenityDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=car_parking" })
  carParking?: string;

  @Metadata({ data: "json, name=cctv" })
  cctv?: boolean;

  @Metadata({ data: "json, name=taxi_rank" })
  taxiRank?: boolean;

  @Metadata({ data: "json, name=toilet" })
  toilet?: boolean;
}
