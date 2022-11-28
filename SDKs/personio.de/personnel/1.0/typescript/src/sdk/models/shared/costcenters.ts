import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CostCenters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: Map<string, any>;
}
