import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class Vlan extends SpeakeasyBase {
  @Metadata({ data: "json, name=begin" })
  begin?: number;

  @Metadata({ data: "json, name=end" })
  end?: number;
}
