import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class V3VehicleDescriptor extends SpeakeasyBase {
  @Metadata({ data: "json, name=air_conditioned" })
  airConditioned?: boolean;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=length" })
  length?: string;

  @Metadata({ data: "json, name=low_floor" })
  lowFloor?: boolean;

  @Metadata({ data: "json, name=operator" })
  operator?: string;

  @Metadata({ data: "json, name=supplier" })
  supplier?: string;
}
