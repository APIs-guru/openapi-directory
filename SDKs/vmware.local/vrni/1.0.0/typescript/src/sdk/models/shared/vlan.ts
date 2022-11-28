import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class Vlan extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=begin" })
  begin?: number;

  @SpeakeasyMetadata({ data: "json, name=end" })
  end?: number;
}
