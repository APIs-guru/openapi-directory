import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GlobalSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  co2Emission?: number;

  @SpeakeasyMetadata()
  co2EmissionUnit?: string;

  @SpeakeasyMetadata()
  editable?: boolean;

  @SpeakeasyMetadata()
  energyCost?: number;

  @SpeakeasyMetadata()
  energyCostUnit?: string;

  @SpeakeasyMetadata()
  groupNameFilter?: string;

  @SpeakeasyMetadata()
  heatingMargin?: number;

  @SpeakeasyMetadata()
  heatingMarginCoverage?: number;

  @SpeakeasyMetadata()
  heatingMarginDeviceName?: string;

  @SpeakeasyMetadata()
  heatingMarginDeviceUrl?: string;

  @SpeakeasyMetadata()
  heatingMarginUnit?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  totalPowerConsumption?: number;

  @SpeakeasyMetadata()
  totalPowerConsumptionUnit?: string;

  @SpeakeasyMetadata()
  updateTimestamp?: number;
}
