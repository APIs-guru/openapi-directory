import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ScriptInstanceInfoRuntimeInformationModel extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: number;

  @SpeakeasyMetadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}
