import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class DeviceCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=created_at" })
  createdAt?: string;

  @Metadata({ data: "json, name=device_id" })
  deviceId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=location_id" })
  locationId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pair_by" })
  pairBy?: string;

  @Metadata({ data: "json, name=paired_at" })
  pairedAt?: string;

  @Metadata({ data: "json, name=product_type" })
  productType: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=status_changed_at" })
  statusChangedAt?: string;
}
