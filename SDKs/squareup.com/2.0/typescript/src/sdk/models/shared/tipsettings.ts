import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TipSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=allow_tipping" })
  allowTipping?: boolean;

  @Metadata({ data: "json, name=custom_tip_field" })
  customTipField?: boolean;

  @Metadata({ data: "json, name=separate_tip_screen" })
  separateTipScreen?: boolean;

  @Metadata({ data: "json, name=smart_tipping" })
  smartTipping?: boolean;

  @Metadata({ data: "json, name=tip_percentages" })
  tipPercentages?: number[];
}
