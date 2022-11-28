import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExperimentalFeaturesBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enableDynamicHttpsDetection" })
  enableDynamicHttpsDetection?: boolean;

  @SpeakeasyMetadata({ data: "json, name=queueResourceAllocation" })
  queueResourceAllocation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=usePrebuiltImages" })
  usePrebuiltImages?: boolean;
}
