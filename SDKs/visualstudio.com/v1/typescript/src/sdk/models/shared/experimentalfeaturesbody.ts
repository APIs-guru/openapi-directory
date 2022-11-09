import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ExperimentalFeaturesBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=enableDynamicHttpsDetection" })
  enableDynamicHttpsDetection?: boolean;

  @Metadata({ data: "json, name=queueResourceAllocation" })
  queueResourceAllocation?: boolean;

  @Metadata({ data: "json, name=usePrebuiltImages" })
  usePrebuiltImages?: boolean;
}
