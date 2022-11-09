import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class ScriptInstanceInfoRuntimeInformationModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: number;

  @Metadata({ data: "json, name=statusMessage" })
  statusMessage?: string;
}
