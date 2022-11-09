import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TagBaseContract } from "./tagbasecontract";


export class TagUsageForApiContract extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=tag" })
  tag?: TagBaseContract;
}
