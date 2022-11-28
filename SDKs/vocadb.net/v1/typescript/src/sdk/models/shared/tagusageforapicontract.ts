import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TagBaseContract } from "./tagbasecontract";



export class TagUsageForApiContract extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: TagBaseContract;
}
