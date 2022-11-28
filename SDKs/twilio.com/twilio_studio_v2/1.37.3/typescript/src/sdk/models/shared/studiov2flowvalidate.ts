import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class StudioV2FlowValidate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=valid" })
  valid?: boolean;
}
