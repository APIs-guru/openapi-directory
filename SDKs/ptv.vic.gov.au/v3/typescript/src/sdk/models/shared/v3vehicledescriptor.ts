import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class V3VehicleDescriptor extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=air_conditioned" })
  airConditioned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=length" })
  length?: string;

  @SpeakeasyMetadata({ data: "json, name=low_floor" })
  lowFloor?: boolean;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;

  @SpeakeasyMetadata({ data: "json, name=supplier" })
  supplier?: string;
}
