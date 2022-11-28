import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeviceSummary } from "./devicesummary";



export class GroupSummary extends SpeakeasyBase {
  @SpeakeasyMetadata()
  ambientTemperature?: number;

  @SpeakeasyMetadata()
  ambientTemperatureUnit?: string;

  @SpeakeasyMetadata()
  co2Emission?: number;

  @SpeakeasyMetadata()
  co2EmissionUnit?: string;

  @SpeakeasyMetadata()
  costUnit?: string;

  @SpeakeasyMetadata({ elemType: DeviceSummary })
  deviceSummaries?: DeviceSummary[];

  @SpeakeasyMetadata()
  editable?: boolean;

  @SpeakeasyMetadata()
  emittedCo2Unit?: string;

  @SpeakeasyMetadata()
  energyConsumptionUnit?: string;

  @SpeakeasyMetadata()
  energyCost?: number;

  @SpeakeasyMetadata()
  energyCostUnit?: string;

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
  historyParentIdKey?: string;

  @SpeakeasyMetadata()
  id?: string;

  @SpeakeasyMetadata()
  name?: string;

  @SpeakeasyMetadata()
  numberOfDevices?: number;

  @SpeakeasyMetadata()
  oneDayConfidence?: number;

  @SpeakeasyMetadata()
  oneDayCost?: number;

  @SpeakeasyMetadata()
  oneDayEmittedCo2?: number;

  @SpeakeasyMetadata()
  oneDayEnergyConsumption?: number;

  @SpeakeasyMetadata()
  oneMonthConfidence?: number;

  @SpeakeasyMetadata()
  oneMonthCost?: number;

  @SpeakeasyMetadata()
  oneMonthEmittedCo2?: number;

  @SpeakeasyMetadata()
  oneMonthEnergyConsumption?: number;

  @SpeakeasyMetadata()
  oneYearConfidence?: number;

  @SpeakeasyMetadata()
  oneYearCost?: number;

  @SpeakeasyMetadata()
  oneYearEmittedCo2?: number;

  @SpeakeasyMetadata()
  oneYearEnergyConsumption?: number;

  @SpeakeasyMetadata()
  serverId?: number;

  @SpeakeasyMetadata()
  totalPowerConsumption?: number;

  @SpeakeasyMetadata()
  totalPowerConsumptionUnit?: string;

  @SpeakeasyMetadata()
  updateTimestamp?: number;

  @SpeakeasyMetadata()
  url?: string;
}
