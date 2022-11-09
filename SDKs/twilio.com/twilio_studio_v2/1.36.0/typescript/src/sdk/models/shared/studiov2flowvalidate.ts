import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class StudioV2FlowValidate extends SpeakeasyBase {
  @Metadata({ data: "json, name=valid" })
  valid?: boolean;
}
